const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI);

const products = [
    { name: 'Dog', price: 99.99, image_url: 'Product_01.jpg', stock: 10 },
    { name: 'T-Rex', price: 59.99, image_url: 'Product_02.jpg', stock: 5 },
    { name: 'Iguana', price: 99.99, image_url: 'Product_03.jpg', stock: 6 },
    { name: 'Bird', price: 67.99, image_url: 'Product_04.jpg', stock: 7 },
    { name: 'Tiger', price: 54.99, image_url: 'Product_05.jpg', stock: 10 },
    { name: 'Cat', price: 50.89, image_url: 'Product_06.jpg', stock: 5 },
    { name: 'Lion', price: 100.99, image_url: 'Product_07.jpg', stock: 6 },
    { name: 'Owl', price: 60.99, image_url: 'Product_08.jpg', stock: 7 },
    { name: 'Cat', price: 99.99, image_url: 'Product_09.jpg', stock: 10 },
    { name: 'Deer', price: 59.00, image_url: 'Product_10.jpg', stock: 5 },
    { name: 'Elephant', price: 110.99, image_url: 'Product_11.jpg', stock: 6 },
    { name: 'Dog', price: 130.99, image_url: 'Product_12.jpg', stock: 7 },
];

async function seedProducts() {
    await Product.deleteMany({}); // clear existing
    await Product.insertMany(products);
    console.log('Products seeded!');
    mongoose.connection.close();
}

seedProducts();