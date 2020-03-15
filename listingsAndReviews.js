const express = require('express');
const app = express();
const _ = require('underscore');
const listingsAndReviews = require('../models/listingsAndReviews');
app.get('/listingsAndReviews', (req, res) => {
    listingsAndReviews.find()
        .exec((err, listingsAndReviews) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            return res.status(200).json({
                ok: true,
                count: listingsAndReviews.length,
                listingsAndReviews
            });
        });
});
module.exports = app;