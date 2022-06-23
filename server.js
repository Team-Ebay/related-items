const express = require('express');
const app = express();
const { Pool } = require('pg');
const cors = require('cors');

const PORT = process.env.PORT || 4000;

const pool = new Pool({
    user: 'bobby',
    host: 'localhost',
    database: 'related_items',
    password: '',
    port: 5432,
})

app.use(express.json());
app.use(cors());

app.get('/api/products', async (req,res) => {
    try {
        const data = await pool.query('SELECT * FROM products;')
        res.send(data.rows);
    } catch (err) {
        console.error(err.message)
    }
})

app.post('/api/products', async (req,res) => {
    const obj = req.body;
    try {
        const data = await pool.query(`INSERT INTO products (name, condition, price, bids, shipping, rating, watchers, seller_rating, items_sold, image_url) VALUES ('${obj.name}', '${obj.condition}', '${obj.price}', '${obj.bids}', '${obj.shipping}', '${obj.rating}', '${obj.watchers}', '${obj.seller_rating}', '${obj.items_sold}', '${obj.image_url}');`)
        res.send("Created product")
    } catch (err) {
        console.error(err.message)
    }
})

app.patch('/api/products/:id', async (req,res) => {
    const id = req.params.id;
    const obj = req.obj;
    if(obj.name) {
        try {
            const data = await pool.query(`UPDATE products SET name = '${obj.name}' WHERE product_id = '${id}';`)
            res.send('Updated name');
        } catch (err) {
            console.error(err.message)
        }
    }
    if(obj.condition) {
        try {
            const data = await pool.query(`UPDATE products SET condition = '${obj.condition}' WHERE product_id = '${id}';`)
            res.send('Updated condition');
        } catch (err) {
            console.error(err.message)
        }
    }
    if(obj.price) {
        try {
            const data = await pool.query(`UPDATE products SET price = '${obj.price}' WHERE product_id = '${id}';`)
            res.send('Updated price');
        } catch (err) {
            console.error(err.message)
        }
    }
    if(obj.bids) {
        try {
            const data = await pool.query(`UPDATE products SET bids = '${obj.bids}' WHERE product_id = '${id}';`)
            res.send('Updated bids');
        } catch (err) {
            console.error(err.message)
        }
    }
    if(obj.shipping) {
        try {
            const data = await pool.query(`UPDATE products SET shipping = '${obj.shipping}' WHERE product_id = '${id}';`)
            res.send('Updated shipping');
        } catch (err) {
            console.error(err.message)
        }
    }
    if(obj.rating) {
        try {
            const data = await pool.query(`UPDATE products SET rating = '${obj.rating}' WHERE product_id = '${id}';`)
            res.send('Updated rating');
        } catch (err) {
            console.error(err.message)
        }
    }
    if(obj.watchers) {
        try {
            const data = await pool.query(`UPDATE products SET watchers = '${obj.watchers}' WHERE product_id = '${id}';`)
            res.send('Updated watchers');
        } catch (err) {
            console.error(err.message)
        }
    }
    if(obj.seller_rating) {
        try {
            const data = await pool.query(`UPDATE products SET seller_rating = '${obj.seller_rating}' WHERE product_id = '${id}';`)
            res.send('Updated seller rating');
        } catch (err) {
            console.error(err.message)
        }
    }
    if(obj.items_sold) {
        try {
            const data = await pool.query(`UPDATE products SET items_sold = '${obj.items_sold}' WHERE product_id = '${id}';`)
            res.send('Updated items sold');
        } catch (err) {
            console.error(err.message)
        }
    }
    if(obj.image_url) {
        try {
            const data = await pool.query(`UPDATE products SET image_url = '${obj.image_url}' WHERE product_id = '${id}';`)
            res.send('Updated image');
        } catch (err) {
            console.error(err.message)
        }
    }
})

app.delete('/api/products', async (req,res) => {
    const id = req.params.id;
    try {
        const data = await pool.query(`DELETE FROM products where product_id = '${id}';`)
        res.send("Deleted product")
    } catch (err) {
        console.error(err.message)
    }
})

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})