DROP DATABASE IF EXISTS capstone_dev; 
CREATE DATABASE capstone_dev; 

\c capstone_dev; 

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    firstname TEXT NOT NULL, 
    lastname TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

CREATE TABLE entries (
    id SERIAL PRIMARY KEY,
    userid INTEGER REFERENCES users (id)
    ON DELETE CASCADE,
    date_created TIMESTAMP NOT NULL,
    mood TEXT NOT NULL,
    interest TEXT NOT NULL,
    activity TEXT NOT NULL
);