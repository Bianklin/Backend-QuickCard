const express = require('express');

const Estudante = require('../models/estudante.js');

const router = express.Router();

router.post('/estudante', async(req, res) => {
    const { email } = req.body;

    try { 
        if(await Estudante.findOne({ email }))
            return res.status(400).send({ error: 'Estudante já existe'});

        const estudante = await Estudante.create(req.body);

        estudante.senha = undefined;

        return res.send({ estudante });
    } catch (err) {
        return res.status(400).send({ error: 'Registration failed'});
    }
});

module.exports = app => app.use('/aut', router);
