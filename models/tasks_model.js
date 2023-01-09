const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Tasks = new Schema({
    userID: {type:String, required: false, max: 255},
    title : {type: String, required:false},
    task: {type: String, required: false, max: 255},
    state : {type: Boolean, required:false }
});
// Exportar o modelo
module.exports = mongoose.model('Tasks', Tasks);