const express = require('express');
const app = express();
const _ = require('underscore');
const Clientes= require('../models/cliente');
app.get('/cliente', (req, res) => {
    Clientes.find({ disponible: true })
        .exec((err, clientes) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            return res.status(200).json({
                ok: true,
                count: clientes.length,
                clientes
            });
        });
});
app.get('/cliente/:id', (req, res) => {
    let id = req.params.id;
   Clientes .find({ disponible: true, _id: id }) //select * from usuario where estado=true
        //solo aceptan valores numericos
        .exec((err, clientes) => { //ejecuta la funcion
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            return res.status(200).json({
                ok: true,
                count: clientes.length,
                clientes
            });
        });
});



app.get('/cliente', (req, res) => {
    let body = req.body;
    city.body.city
   Clientes .find({ disponible: true, city: city }) //select * from usuario where estado=true
        //solo aceptan valores numericos
        .exec((err, clientes) => { //ejecuta la funcion
            if (err) {
                return res.status(400).json({
                    ok: false,
                    err
                });
            }

            return res.status(200).json({
                ok: true,
                count: clientes.length,
                clientes
            });
        });
});







app.post('/cliente', (req, res) => {
    let body = req.body;
    let clientes = new Clientes({
        address:body.address,
        city:body.city,
        coutry:body.coutry,
        district:body.district,
        firstName:body.firstName,
        lastName:body.lastName
    });
    clientes.save((err, cliDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            cliDB
        });
    });
});

app.put('/cliente/:id', (req, res) => {
    let id = req.params.id
    let body = _.pick(req.body, ['address','city','coutry','district','firstName','lastName']);
    Clientes.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' }, (err, cliDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            cliDB
        });

    });
});

app.delete('/cliente/:id', (req, res) => {
    let id = req.params.id;

    Clientes.findByIdAndUpdate(id, { disponible: false }, { new: true, runValidators: true, context: 'query' }, (err, resp) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                err
            });
        }
        return res.status(200).json({
            ok: true,
            resp
        });
    });
});

module.exports = app;