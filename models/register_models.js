const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let User = new Schema({
    name: {type: String, required: true, max: 255},
    email: {type: String, required: true, max: 255},
    password : {type: String, required:false , max:255}
});
// Exportar o modelo
module.exports = mongoose.model('User', User);