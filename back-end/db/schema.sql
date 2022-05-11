DROP DATABASE IF EXISTS capstone_dev;
CREATE DATABASE capstone_dev;

\c capstone_dev

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    fname TEXT NOT NULL,
    lname TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT NOT NULL
);

CREATE TABLE entries (
    id SERIAL PRIMARY KEY,
    userId INTEGER REFERENCES users (uid)
    ON DELETE CASCADE,
    date TIMESTAMP NOT NULL,
    mood TEXT NOT NULL,
    interest TEXT NOT NULL,
    activity TEXT NOT NULL
);