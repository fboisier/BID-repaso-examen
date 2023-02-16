const mongoose = require('mongoose');
const AlumnoSchema = new mongoose.Schema({
    nombre: { 
        type: String,
        minlength:[10, 'El minimo es de 10'],
        required:[true, 'Este dato es requerido']
    },
    apellido: { type: String },
    curso: {
        type: String,
        enum:['Python', 'MERN']
    },
    activo: { type: Boolean },
    detalle: { 
        type: String,
        maxlength:[500, 'El máximo es de 500 caracteres'],
    }
}, { timestamps: true });
module.exports.Alumno = mongoose.model('Alumno', AlumnoSchema);

