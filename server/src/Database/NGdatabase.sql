CREATE DATABASE ClimateChange
USE ClimateChange

CREATE TABLE Users(
    UserID INT IDENTITY(1,1) PRIMARY KEY,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    Email VARCHAR(100) UNIQUE NOT NULL,
    Password VARCHAR(255) NOT NULL,
    NationalID VARCHAR(255),
    County VARCHAR(255),
    Residence VARCHAR(255),
    PhoneNumber VARCHAR(255),
    Occupation VARCHAR(255),
    Gender VARCHAR(255),
    DateOfBirth VARCHAR(255),
    PhotoURL VARCHAR(255)
);

SELECT * FROM Users
DROP TABLE Users

CREATE TABLE Initiatives(
    InitiativeID INT IDENTITY(1,1) PRIMARY KEY,
    Title VARCHAR(255),
    Tag VARCHAR(255),
    Date DATE
);

SELECT * FROM Initiatives;
DROP TABLE Initiatives;


CREATE TABLE Blogs(
    BlogID INT IDENTITY(1,1) PRIMARY KEY,
    BlogImage VARCHAR(255),
    BlogTitle VARCHAR(255),
    BlogSubject VARCHAR(255),
    BlogContent VARCHAR(MAX),
);

SELECT * FROM Blogs;
DROP TABLE Blogs;

