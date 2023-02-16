import React from 'react'
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';



const AlumnosErrores = Yup.object().shape({
    nombre: Yup.string()
        .min(5, 'El nombre debe tener como minimo 5 caracteres')
        .max(70, 'No puede ser muy largo el nombre.')
        .required('Requerido'),
    apellido: Yup.string()
        .required('El apellido es requerido.')
        .min(10, 'Se necesita como minumo 10 caracteres.')
        .max(100, 'no puede superar los 100 caracteres'),
    curso: Yup.string()
        .required('Se necesita este dato')
});

const AlumnoForm = ({initialValues, botonTexto, onSubmit}) => {

  return (
    <Formik 
        enableReinitialize={true}
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={AlumnosErrores}
    >
        {({ errors, touched, isValid, dirty }) => (
            <Form>
                <Field name="nombre" className="form-control" placeholder="Nombre" />
                {touched.nombre && errors.nombre && <div className="ms-3 mt-1 text-danger">{errors.nombre}</div>}
                <Field name="apellido" className="form-control mt-2" placeholder="Apellido"/>
                {touched.apellido && errors.apellido && <div className="ms-3 mt-1 text-danger">{errors.apellido}</div>}
                <Field name="curso" as="select" className="form-select mt-2" placeholder="Curso">
                    <option value="Python">Python sin limites!!!!</option>
                    <option value="MERN">MERN sin limites!!!!</option>
                </Field>
                {touched.curso && errors.curso && <div className="ms-3 mt-1 text-danger">{errors.curso}</div>}
                <Field name="detalle"  as="textarea" className="form-control mt-2" placeholder="Detalle"/>
                {touched.detalle && errors.detalle && <div className="ms-3 mt-1 text-danger">{errors.detalle}</div>}
                <div className="form-check mt-2">
                    <Field name="activo" type="checkbox" className="form-check-input" id="activo"/>
                    <label className="form-check-label" htmlFor="activo">
                        Activo
                    </label>
                </div>
                <button className="btn btn-primary mt-5" disabled={!(isValid && dirty)}>{botonTexto} Alumno</button>
            </Form>
        )}
    </Formik>
  )
}

export default AlumnoForm