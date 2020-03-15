const express = require('express');
const app = express();
app.use(require('./cliente'))
app.use(require('./listingsAndReviews'))
module.exports = app;

