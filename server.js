const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config');
const invoiceRoutes = require('./Routes/invoiceRoutes');
const authRoutes = require('./Routes/authRoutes');

const app = express();

app.use(bodyParser.json());


app.use( (req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,PATCH');
    res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
    next();
})

app.use(authRoutes);
app.use(invoiceRoutes);

mongoose
    .connect(config.MONGODB_URI)
    .then(() => {
        app.listen(8000);
        console.log("Server started on localhost:8000")
    });