-- 1. Crear la base de datos analítica (Data Warehouse)
CREATE DATABASE Bank_DW;
GO

-- 2. Modificar el contexto de ejecución hacia la nueva base de datos
USE Bank_DW;
GO

-- Capa de aterrizaje para la ingesta bruta
CREATE TABLE Staging_BankTransactions (
    TransactionID VARCHAR(50),
    CustomerID VARCHAR(50),
    CustomerDOB VARCHAR(50),
    CustGender VARCHAR(10),
    CustLocation VARCHAR(100),
    CustAccountBalance FLOAT,
    TransactionDate VARCHAR(50),
    TransactionTime VARCHAR(50),
    TransactionAmount FLOAT
);

-- Dimensión Geográfica
CREATE TABLE Dim_Location (
    LocationID INT IDENTITY(1,1) PRIMARY KEY,
    LocationName VARCHAR(100) UNIQUE
);

-- Dimensión Cliente
CREATE TABLE Dim_Customer (
    CustomerID VARCHAR(50) PRIMARY KEY,
    CustomerDOB DATE,
    CustGender CHAR(1)
);

-- Tabla de Hechos Transaccionales
CREATE TABLE Fact_Transaction (
    TransactionID VARCHAR(50) PRIMARY KEY,
    CustomerID VARCHAR(50) FOREIGN KEY REFERENCES Dim_Customer(CustomerID),
    LocationID INT FOREIGN KEY REFERENCES Dim_Location(LocationID),
    CustAccountBalance FLOAT,
    TransactionDate DATE,
    TransactionTime TIME,
    TransactionAmount FLOAT
);