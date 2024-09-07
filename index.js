const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./connection');
const route = require('./routes/url');

connectDB();
app.use(express.json())
app.use('/url',route);

app.listen('4001',()=>console.log("server started"))