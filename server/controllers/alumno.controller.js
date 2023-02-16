const { Alumno } = require("../models/alumno.model");

module.exports.createAlumno = async (request, response) => {
    try {
        alumno = await Alumno.create(request.body);
        response.json(alumno);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAllAlumno = async (request, response) => {
    try {
        const alumnos = await Alumno.find({})
        response.json(alumnos);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAlumno = async (request, response) => {
    try {
        const alumno = await Alumno.findOne({_id:request.params.id})
        response.json(alumno);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.updateAlumno = async (request, response) => {
    try {
        const alumno = await Alumno.findOneAndUpdate({_id: request.params.id}, request.body, {new:true, runValidators: true })
        response.json(alumno);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.deleteAlumno = async (request, response) => {
    try {
        const alumno = await Alumno.deleteOne({ _id: request.params.id })
        response.json(alumno);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}