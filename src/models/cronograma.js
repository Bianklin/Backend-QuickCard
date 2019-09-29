const mongoose = require('../database');

const CronogramaSchema = new mongoose.Schema({
    id_estudante: {
        type: int,
        require:true,
    },
    nome: {
        type: String,
        require: true,
        unique: true,
    },
    dias_semana: {
        type: String,
        require: true,
    },
    minutos_ciclo_estudo: {
        type: int,
        required: true,
    },
    minutos_intervalo: {
        type: int,
        required: true,
    },
    recompensa_intervalo: {
        type: String,
        require: true,
    },
});

const Cronograma = mongoose.model('Cronograma', CronogramaSchema);

module.exports = Cronograma;