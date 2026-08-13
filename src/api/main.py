from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import joblib
import numpy as np
import pandas as pd

app = FastAPI(title="Bank Segmentation API", version="1.0")

# Habilitacion de CORS para desarrollo local
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Carga de los objetos matematicos en memoria global
try:
    scaler = joblib.load('src/models/scaler.pkl')
    kmeans = joblib.load('src/models/kmeans_model.pkl')
except Exception as e:
    raise RuntimeError(f"Error al cargar los modelos serializados: {e}")

# Definicion del esquema de datos de entrada
class TransactionData(BaseModel):
    Recency: float
    Frequency: float
    Monetary_Volume: float
    Avg_Account_Balance: float

@app.post("/predict_segment")
def predict_segment(data: TransactionData):
    try:
        # 1. Recepcion y estructuracion
        input_data = pd.DataFrame([{
            'Recency': data.Recency,
            'Frequency': data.Frequency,
            'Monetary_Volume': data.Monetary_Volume,
            'Avg_Account_Balance': data.Avg_Account_Balance
        }])
        
        # 2. Transformacion algebraica (Logaritmo + Estandarizacion)
        input_log = np.log1p(input_data)
        input_scaled = scaler.transform(input_log)
        
        # 3. Prediccion (Inferencia)
        cluster = kmeans.predict(input_scaled)
        
        return {
            "status": "success",
            "assigned_cluster": int(cluster[0])
        }
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))