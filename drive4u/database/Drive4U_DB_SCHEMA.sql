
CREATE SCHEMA IF NOT EXISTS Drive4U DEFAULT CHARACTER SET utf8mb3 ;
USE Drive4U ;

-- -----------------------------------------------------
-- Table `drive4u`.`cars`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Cars (
  CarId INT NOT NULL AUTO_INCREMENT,
  CarType VARCHAR(45) NULL DEFAULT NULL,
  CarName VARCHAR(45) NULL DEFAULT NULL,
  RegDate DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (`CarId`)
)


-- -----------------------------------------------------
-- Table `drive4u`.`sensordata`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Sensordata (
  SensorId INT NOT NULL AUTO_INCREMENT,
  time DATETIME NULL DEFAULT NULL,
  ax FLOAT NULL DEFAULT NULL,
  ay FLOAT NULL DEFAULT NULL,
  az FLOAT NULL DEFAULT NULL,
  temp FLOAT NULL DEFAULT NULL,
  humi FLOAT NULL DEFAULT NULL,
  PRIMARY KEY (SensorId)
)


-- -----------------------------------------------------
-- Table `drive4u`.`carsensordatalinks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Carsensordatalinks (
  Id INT NOT NULL AUTO_INCREMENT,
  CarId INT NOT NULL,
  SensorId INT NOT NULL,
  PRIMARY KEY (Id),
  FOREIGN KEY (CarId) REFERENCES Cars (CarId),
  FOREIGN KEY (SensorId) REFERENCES Sensordata (SensorId)
)

-- -----------------------------------------------------
-- Table `drive4u`.`videodata`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Videodata (
  VideoID INT NOT NULL AUTO_INCREMENT,
  VideoURL VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (VideoID)
)

-- -----------------------------------------------------
-- Table `drive4u`.`carvideodatalinks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Carvideodatalinks (
  Id INT NOT NULL AUTO_INCREMENT,
  CarId INT NOT NULL,
  VideoId INT NOT NULL,
  PRIMARY KEY (Id),
  INDEX CarId (CarId ASC) VISIBLE,
  INDEX VideoId (VideoId ASC) VISIBLE,
  FOREIGN KEY (CarId) REFERENCES Cars (CarId),
  FOREIGN KEY (VideoId) REFERENCES Videodata (VideoID)
)

-- -----------------------------------------------------
-- Table `drive4u`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Users (
  Id INT NOT NULL AUTO_INCREMENT,
  UserId VARCHAR(45) NOT NULL,
  Password VARCHAR(45) NOT NULL,
  Name VARCHAR(45) NOT NULL,
  Email VARCHAR(45) NULL DEFAULT NULL,
  RegDate DATETIME NULL DEFAULT NULL,
  PRIMARY KEY (Id)
)


-- -----------------------------------------------------
-- Table `drive4u`.`usercarlinks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS Usercarlinks (
  Id INT NOT NULL AUTO_INCREMENT,
  UserId INT NOT NULL,
  CarId INT NOT NULL,
  PRIMARY KEY (Id),
  FOREIGN KEY (UserId) REFERENCES Users (Id),
  FOREIGN KEY (CarId) REFERENCES Cars (CarId)
)
