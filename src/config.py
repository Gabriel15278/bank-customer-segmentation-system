import os
from pathlib import Path

# Rutas base del proyecto
BASE_DIR = Path(__file__).resolve().parent.parent
MODELS_DIR = os.path.join(BASE_DIR, "src", "models")
DATA_DIR = os.path.join(BASE_DIR, "data")

# Rutas de artefactos serializados
SCALER_PATH = os.path.join(MODELS_DIR, "scaler.pkl")
KMEANS_MODEL_PATH = os.path.join(MODELS_DIR, "kmeans_model.pkl")
PROCESSED_DATA_PATH = os.path.join(DATA_DIR, "processed", "customer_segments.csv")

# Configuracion del Modelo
OPTIMAL_K = 6
BATCH_SIZE = 10000
RANDOM_STATE = 42

# Configuracion de la Base de Datos
DB_VIEW_NAME = "vw_RFM_Matrix"