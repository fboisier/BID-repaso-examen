import { createBrowserRouter } from "react-router-dom";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AlumnoDetalle from "../pages/alumnos/AlumnoDetalle";
import AlumnoEditar from "../pages/alumnos/AlumnoEditar";
import Alumnos from "../pages/alumnos/Alumnos";
import AlumnosAdd from "../pages/alumnos/AlumnosAdd";

export default createBrowserRouter([
    {
        path:'/',
        element: <Layout />,
        errorElement: <NotFound />,
        children:[
            {
                index: true,
                element: <Home />
            },
            {
                path:'alumnos',
                element: <Alumnos />
            },
            {
                path:'alumnos/agregar',
                element: <AlumnosAdd />
            },
            {
                path:'alumnos/:id',
                element: <AlumnoDetalle />
            },
            {
                path:'alumnos/:id/editar',
                element: <AlumnoEditar />
            }
        ]
    }
]);