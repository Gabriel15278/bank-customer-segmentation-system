import sys
from pathlib import Path

# Add project root to path to enable imports
sys.path.insert(0, str(Path(__file__).parent.parent.parent))


import pandas as pd
import numpy as np
import joblib
from sklearn.preprocessing import StandardScaler
from sklearn.cluster import MiniBatchKMeans
from src.database.connection import get_db_engine

def load_and_preprocess_data():
    engine = get_db_engine()
    query = "SELECT CustomerID, Recency, Frequency, Monetary_Volume, Avg_Account_Balance FROM vw_RFM_Matrix;"
    df = pd.read_sql(query, con=engine)
    df.set_index('CustomerID', inplace=True)
    
    # Limpieza de nulos y atipicos negativos
    df.dropna(inplace=True)
    df = df[(df >= 0).all(axis=1)]
    
    # Transformaciones matematicas
    df_log = np.log1p(df)
    scaler = StandardScaler()
    scaler.fit(df_log)
    df_scaled = pd.DataFrame(scaler.transform(df_log), columns=df_log.columns, index=df_log.index)
    
    return df, df_scaled, scaler

def execute_final_clustering(df_raw, df_scaled, scaler, k=6):
    print(f"\nEntrenando modelo final con k={k}...")
    kmeans = MiniBatchKMeans(n_clusters=k, random_state=42, batch_size=10000, n_init='auto')
    kmeans.fit(df_scaled)
    
    # 1. Asignacion de etiquetas
    df_raw['Cluster'] = kmeans.labels_
    
    # 2. Serializacion (Exportacion) de los objetos para la API REST
    joblib.dump(scaler, 'src/models/scaler.pkl')
    joblib.dump(kmeans, 'src/models/kmeans_model.pkl')
    print("Objetos matematicos serializados exitosamente en src/models/")
    
    # 3. Reversion matematica para interpretar los centroides
    centroids_scaled = kmeans.cluster_centers_
    centroids_log = scaler.inverse_transform(centroids_scaled)
    centroids_real = np.expm1(centroids_log)
    
    df_centroids = pd.DataFrame(
        centroids_real, 
        columns=['Recency', 'Frequency', 'Monetary_Volume', 'Avg_Account_Balance']
    )
    df_centroids.index.name = 'Cluster'
    
    return df_raw, df_centroids

if __name__ == "__main__":
    df_raw, df_scaled, scaler = load_and_preprocess_data()
    
    df_final, df_centroids = execute_final_clustering(df_raw, df_scaled, scaler, k=6)
    
    print("\n--- Perfilamiento de Segmentos (Centroides Reales) ---")
    print(df_centroids.round(2))
    
    output_path = "data/processed/customer_segments.csv"
    df_final.to_csv(output_path)
    print(f"\nProceso finalizado con exito. Datos estructurados exportados a: {output_path}")