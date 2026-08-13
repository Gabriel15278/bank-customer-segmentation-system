import time
import pandas as pd
from src.database.connection import get_db_engine

# Instanciación del motor utilizando el módulo centralizado
engine = get_db_engine()

# Rutas relativas basadas en la estructura del proyecto
csv_file_path = "data/raw/bank_transactions.csv"
table_name = "Staging_BankTransactions"
chunk_size = 100000

start_time = time.time()

try:
    for i, chunk in enumerate(pd.read_csv(csv_file_path, chunksize=chunk_size, dtype=str)):
        
        # Renombrar la columna para alinearla con el esquema DDL de SQL Server
        chunk.rename(columns={'TransactionAmount (INR)': 'TransactionAmount'}, inplace=True)
        
        chunk.to_sql(name=table_name, con=engine, if_exists='append', index=False)
        print(f"Lote {i+1} insertado ({len(chunk)} filas).")
        
    elapsed_time = time.time() - start_time
    print(f"Ejecucion finalizada. Tiempo total: {elapsed_time:.2f} segundos.")

except Exception as e:
    print(f"Error de ejecucion: {e}")