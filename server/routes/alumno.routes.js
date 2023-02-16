const AlumnoController = require('../controllers/alumno.controller');
module.exports = function(app){
    app.post('/api/alumno', AlumnoController.createAlumno);
    app.get('/api/alumno',AlumnoController.getAllAlumno);
    app.get('/api/alumno/:id',AlumnoController.getAlumno);
    app.put('/api/alumno/:id',AlumnoController.updateAlumno);
    app.delete('/api/alumno/:id',AlumnoController.deleteAlumno);
}
