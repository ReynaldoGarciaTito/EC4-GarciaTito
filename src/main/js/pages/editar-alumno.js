const React = require('react');
const client = require('../client');
const { render, Link, useParams } = require("react-router-dom");
const { useState, useEffect } = require('react');

function PageEditarAlumno() {

    const [alumno, setAlumno] = useState({});

    let { id } = useParams();

    useEffect(() => {
        client({ method: 'GET', path: '/api/alumnos/' + id }).done(response => {
            setAlumno(response.entity);
        });
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/alumnos/' + id,
            entity: alumno,
            headers: { 'Content-Type': 'application/json' }
        }).done(() => window.location = "/");
    };

    return (
        <>
            <h2>Editar Alumno</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='nombre'>Nombres</label>
                <input type="text" id="nombre" name="nombre" value={alumno.nombre} onChange={(e) => setAlumno({...alumno, nombre: e.target.value })} />
                <label htmlFor='apellido'>Apellidos</label>
                <input type="text" id="apellido" name="apellido" value={alumno.apellido} onChange={(e) => setAlumno({...alumno, apellido: e.target.value })} />
                <label htmlFor='grado'>Grado</label>
                <input type="text" id="grado" name="grado" value={alumno.grado} onChange={(e) => setAlumno({...alumno, grado: e.target.value })} />
                <input type='submit' value="Editar Alumno"></input>
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageEditarAlumno;