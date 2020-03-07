const restful = require('node-restful');
const { Schema} = restful.mongoose;

const cursos = new Schema({
    codigo : {type: Number, require : true},
    descricao : {type : String, require : true},
    cargaHoraria : {type : Number, require : true, min: 4},
    preco : {type : Number, require : true, min: 0},
    categoria : {type : String, require : true, 
        enum : ['INFORMATICA', 'REDES', 'ADMINISTRACAO', 'ENGENHARIA']},
});

module.exports = restful.model('cursos', cursos);