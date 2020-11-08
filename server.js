const express = require ('express');
const logger = require ('morgan');
const mongoose = require ('mongoose');
const app = express();
const path = require('path')
const db = require('./models')


const PORT = process.env.PORT || 5000

app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`App rocking on port ${PORT}`);
});