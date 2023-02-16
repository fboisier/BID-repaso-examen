import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';

const AlumnoDetalle = () => {

    const { id } = useParams()
    const [alumno, setAlumno] = useState({})

    useEffect(() => {

        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/alumno/${id}`);
            setAlumno(respuesta.data);
        }

        getData();

    }, [id])

    return (
        <div className="card">
            <div className="card-header">
                Detalle de la Alumno
            </div>
            <div className="card-body">
                <h5 className="card-title">Nombre: {alumno.nombre}</h5>
                <p className="card-text">El alumno o alumna está cursando {alumno.curso} en coding dojo.</p>
                <Link className="btn btn-primary" to="/alumnos" >Volver</Link>
            </div>
        </div>
    )
}

export default AlumnoDetalle