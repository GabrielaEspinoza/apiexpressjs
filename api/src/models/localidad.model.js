const mongoose = require('mongoose');
const { Schema } = mongoose;

const LocalidadSchema = new Schema({
    nombre: { type: String, required: true },
    precio: { type: String, required: true },
    numero: { type: String, required: true },
    descripcion: { type: String }
});

module.exports = mongoose.model("localidad", LocalidadSchema);