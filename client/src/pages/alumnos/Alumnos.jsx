import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import DeleteButton from '../../components/DeleteButton';

const Alumnos = () => {
  const [alumnos, setAlumnos] = useState([]);

  useEffect(() => {
    
    const getData = async () => {
      const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/alumno`);
      setAlumnos(respuesta.data);
    }

    getData();
  
  }, []);
  
  const quitarAlumno = (alumnoID) => {
    setAlumnos(alumnos.filter((alumno) => alumno._id !== alumnoID));
  }


  return (
    <>
      <h1>Listado de Alumnos</h1>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Curso</th>
            <th>Activo?</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          { alumnos.map( (alumno, index) => <tr key={index} >
            <td>{ alumno.nombre }</td>
            <td>{ alumno.apellido }</td>
            <td>{ alumno.curso }</td>
            <td>{ (alumno.activo) ? <span class="material-symbols-outlined text-success">
check_circle
</span>:<span class="material-symbols-outlined text-danger">
cancel
</span> }</td>
            <td>
              <Link className="btn btn-primary" to={`/alumnos/${alumno._id}`}>Detalle</Link>   
              <Link className="btn btn-success ms-2" to={`/alumnos/${alumno._id}/editar`}>Editar</Link>   
              <DeleteButton id_alumno={alumno._id} successCallback={quitarAlumno} />
            </td>
          </tr> ) }
        </tbody>
      </table>
      <Link to="/alumnos/agregar" className="btn btn-primary">Agregar Alumno</Link>
    </>
  )
}

export default Alumnos