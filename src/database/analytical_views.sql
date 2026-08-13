USE Bank_DW;
GO

-- 1. Creación de la vista analítica
CREATE VIEW vw_RFM_Matrix AS
WITH ReferenceDate AS (
    -- Extrae una única vez la fecha máxima transaccional global
    SELECT MAX(TransactionDate) AS MaxTransDate
    FROM Fact_Transaction
)
SELECT 
    f.CustomerID,
    -- Recency: Diferencia en días (Fecha Global Máxima - Fecha Última del Cliente)
    DATEDIFF(DAY, MAX(f.TransactionDate), r.MaxTransDate) AS Recency,
    -- Frequency: Conteo absoluto de transacciones
    COUNT(f.TransactionID) AS Frequency,
    -- Monetary: Sumatoria del volumen transaccional, redondeado a 2 decimales
    ROUND(SUM(f.TransactionAmount), 2) AS Monetary_Volume,
    -- Atributo extendido: Promedio de liquidez en cuenta
    ROUND(AVG(f.CustAccountBalance), 2) AS Avg_Account_Balance
FROM Fact_Transaction f
CROSS JOIN ReferenceDate r
GROUP BY 
    f.CustomerID, 
    r.MaxTransDate;
GO

-- 2. Consulta para extraer la matriz lista para Python
SELECT * 
FROM vw_RFM_Matrix;