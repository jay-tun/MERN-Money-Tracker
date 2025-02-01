const mongoose = require('mongoose');
const {Schema, model} = mongoose;


const TranscationSchema = new Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    datetime: {type: Date, required: true}
});

const TranscationModel = model('Transcation', TranscationSchema);

module.exports = TranscationModel;