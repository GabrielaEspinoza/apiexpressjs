const mongoose = require('mongoose');
const { Schema } = mongoose;

const SensorSchema = new Schema({
    tiempo: { type: String, required: true },
    detencion: { type: String, required: true },
    estado: { type: String, required: true }
});

module.exports = mongoose.model("sensor", SensorSchema);