USE Bank_DW;
GO

-- 1. Poblar Dim_Location
INSERT INTO Dim_Location (LocationName)
SELECT DISTINCT CustLocation 
FROM Staging_BankTransactions 
WHERE CustLocation IS NOT NULL;

-- 2. Poblar Dim_Customer
WITH CustomerDedup AS (
    SELECT 
        CustomerID,
        TRY_CONVERT(DATE, CustomerDOB, 3) AS CustomerDOB,
        LEFT(CustGender, 1) AS CustGender,
        ROW_NUMBER() OVER (PARTITION BY CustomerID ORDER BY TRY_CONVERT(DATE, TransactionDate, 3) DESC) AS RowNum
    FROM Staging_BankTransactions
)
INSERT INTO Dim_Customer (CustomerID, CustomerDOB, CustGender)
SELECT 
    CustomerID, 
    CustomerDOB, 
    CustGender
FROM CustomerDedup
WHERE RowNum = 1;

-- 3. Poblar Fact_Transaction
INSERT INTO Fact_Transaction (TransactionID, CustomerID, LocationID, CustAccountBalance, TransactionDate, TransactionTime, TransactionAmount)
SELECT 
    s.TransactionID,
    s.CustomerID,
    l.LocationID,
    CAST(s.CustAccountBalance AS FLOAT),
    TRY_CONVERT(DATE, s.TransactionDate, 3),
    STUFF(STUFF(RIGHT('000000' + s.TransactionTime, 6), 3, 0, ':'), 6, 0, ':'),
    CAST(s.TransactionAmount AS FLOAT)
FROM Staging_BankTransactions s
LEFT JOIN Dim_Location l ON s.CustLocation = l.LocationName;