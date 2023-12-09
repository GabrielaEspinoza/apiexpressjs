const mongoose = require('mongoose');
const { Schema } = mongoose;

const ComboSchema = new Schema({
    nombre: { type: String, required: true },
    zona: { type: String, required: true },
    precio: { type: String, required: true },
    descripcion: { type: String },
});

module.exports = mongoose.model("combo", ComboSchema);