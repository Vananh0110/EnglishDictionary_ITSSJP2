const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv')
dotenv.config()

const route = require('./Routes');

const PORT = process.env.PORT || 3000;

var app = express();

route(app);
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});