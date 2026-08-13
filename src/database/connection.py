import os
import urllib
from sqlalchemy import create_engine
from dotenv import load_dotenv

def get_db_engine():
    load_dotenv()
    
    server = os.getenv('DB_SERVER')
    database = os.getenv('DB_DATABASE')
    driver = os.getenv('DB_DRIVER')
    user = os.getenv('DB_USER')
    password = os.getenv('DB_PASSWORD')
    
    if user and password:
        params_string = f"DRIVER={driver};SERVER={server};DATABASE={database};UID={user};PWD={password}"
    else:
        params_string = f"DRIVER={driver};SERVER={server};DATABASE={database};Trusted_Connection=yes;"
        
    params = urllib.parse.quote_plus(params_string)
    
    # Se habilita fast_executemany=True como estándar para todo el proyecto
    engine = create_engine(f"mssql+pyodbc:///?odbc_connect={params}", fast_executemany=True)
    
    return engine