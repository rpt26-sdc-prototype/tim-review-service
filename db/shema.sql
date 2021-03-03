DROP DATABASE service1;
CREATE DATABASE service1;
USE service1;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  ID INT NOT NULL AUTO_INCREMENT,
  userName varchar(50) UNIQUE NOT NULL,
  profilePicture varchar(255) UNIQUE NOT NULL,
  userTheme varchar(50) UNIQUE NOT NULL,
  steamLevel INTEGER NULL DEFAULT NULL,
  reviewsGiven INTEGER NULL DEFAULT NULL,
  playtime INTEGER NULL DEFAULT NULL,
  productActivation varchar(50) UNIQUE NOT NULL,
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  ID INT NOT NULL AUTO_INCREMENT,
  userID INT,
  reviewText VARCHAR(8000),
  creationDate BIGINT NULL DEFAULT NULL,
  recommended INTEGER NULL DEFAULT NULL,
  helpfulCount INTEGER NULL DEFAULT NULL,
  funnyCount INTEGER NULL DEFAULT NULL,
  earlyAccess INTEGER NULL DEFAULT NULL,
  awards varchar(255) UNIQUE NOT NULL,
  PRIMARY KEY (ID),
  FOREIGN KEY (userID) REFERENCES users(ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < db/schema.sql
 *  to create the database and the tables.*/