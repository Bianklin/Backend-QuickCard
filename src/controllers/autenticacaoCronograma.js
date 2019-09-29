const express = require('express');

const Cronograma = require('../models/cronograma.js');

const router = express.Router();

router.post('/cronograma', async(req, res) => {
    const { nome } = req.body;

    try { 
        if(await Cronograma.findOne({ nome }))
            return res.status(400).send({ error: 'Cronograma já existe'});

        const cronograma = await Cronograma.create(req.body);

        return res.send({ cronograma });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed'});
    }
});

module.exports = app => app.use('/aut', router);
