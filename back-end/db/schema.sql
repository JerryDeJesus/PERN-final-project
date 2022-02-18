DROP DATABASE IF EXISTS cta_dev;
CREATE DATABASE cta_dev;

\c cta_dev;

DROP TABLE IF EXISTS test;

CREATE TABLE shoes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    price INTEGER DEFAULT 0,
    rating INTEGER DEFAULT 0,
    featured BOOLEAN,
    image TEXT
);
