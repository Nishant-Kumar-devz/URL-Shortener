const express = require('express');
const app = express();
const connectDB = require('./connection');
const route = require('./routes/url');

connectDB('mongodb://127.0.0.1:27017/short-url');
app.use(express.json())
app.use('/url',route);

app.listen('4001',()=>console.log("server started"))