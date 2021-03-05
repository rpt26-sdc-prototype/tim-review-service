DROP DATABASE service1;
CREATE DATABASE service1;
USE service1;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  ID INT NOT NULL AUTO_INCREMENT,
  userName varchar(50) UNIQUE NOT NULL,
  profilePicture varchar(255),
  userTheme varchar(50),
  steamLevel INTEGER,
  reviewsGiven INTEGER,
  playtime INTEGER,
  productActivation varchar(50),
  PRIMARY KEY (ID)
);

DROP TABLE IF EXISTS reviews;

CREATE TABLE reviews (
  ID INT NOT NULL AUTO_INCREMENT,
  userID INT,
  reviewText VARCHAR(8000),
  creationDate BIGINT,
  recommended INTEGER,
  helpfulCount INTEGER,
  notHelpfulCount INTEGER,
  funnyCount INTEGER,
  earlyAccess INTEGER,
  awards varchar(255),
  comments INTEGER,
  PRIMARY KEY (ID),
  FOREIGN KEY (userID) REFERENCES users(ID)
);


/*  Execute this file from the command line by typing:
 *    mysql -u root < db/schema.sql
 *  to create the database and the tables.*/