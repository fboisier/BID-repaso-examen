import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import AlumnoForm from '../../components/AlumnoForm'
import axios from 'axios';
import Swal from 'sweetalert2'

const AlumnoEditar = () => {
    const navigate = useNavigate();

    const initialValues = {
        nombre: '',
        apellido: '',
        curso: '',
        detalle: '',
        activo: false
      }

    const { id } = useParams()
    const [alumno, setAlumno] = useState(initialValues)

    useEffect(() => {

        const getData = async () => {
            const respuesta = await axios.get(`${process.env.REACT_APP_API_URL}/alumno/${id}`);
            setAlumno(respuesta.data);
        }

        getData();

    }, [id])

    const actualizarAlumno = async(values, actions) => {

        try {
            const respuesta = await axios.put(`${process.env.REACT_APP_API_URL}/alumno/${id}`, values);
            console.log(respuesta);
            if (respuesta.status === 200){
                Swal.fire({
                    icon: 'success',
                    title: 'GENIAL!!!',
                    text: `Se ha actualizado ${respuesta.data.nombre} perfectamente!`,
                });

                navigate('/alumnos');
            }
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Ops que mal!!!',
                text: `Error: ${error?.response?.data?.message || error.message}`,
            })
        }
      }

    return (
        <>
            <h1>Editar Alumno</h1>
            <hr />
            <div className="row">
                <div className="col-lg-4 col-sm-12 col-md-6">
                    <AlumnoForm 
                        initialValues={alumno}
                        botonTexto="Actualizar"
                        onSubmit={actualizarAlumno}
                    />
                </div>
            </div>
        </>
    )
}

export default AlumnoEditar