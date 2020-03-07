const restful = require('node-restful');
const { Schema} = restful.mongoose;

const contatos = new Schema({
    data : {type: Date, require : true},
    nome : {type : String, require : true},
    email : {type : String, require : true},
    assunto : {type : String, require : true},
 });

module.exports = restful.model('contatos', contatos);