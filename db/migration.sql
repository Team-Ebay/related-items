DROP TABLE IF EXISTS products;

CREATE TABLE products (
    product_id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    condition TEXT NOT NULL,
    price TEXT NOT NULL,
    bids VARCHAR(10),
    shipping VARCHAR(30),
    rating TEXT, 
    watchers TEXT,
    seller_rating TEXT,
    items_sold TEXT,
    image_url TEXT
)