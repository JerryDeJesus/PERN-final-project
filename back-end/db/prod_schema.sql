DROP TABLE IF EXISTS shoes;

CREATE TABLE shoes (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL,
    footwear_type TEXT NOT NULL,
    price INTEGER DEFAULT 0,
    rating INTEGER DEFAULT 0,
    featured BOOLEAN,
    image TEXT
);
