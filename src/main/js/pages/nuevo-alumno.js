const React = require('react');
const client = require('../client');
const { render, Link } = require("react-router-dom");
const {useState} = require('react');

function PageNuevoAlumno() {

    const [nombre,  setNombre] = useState("");
    const [apellido,  setApellido] = useState("");
    const [grado,  setGrado] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/alumnos',
            entity: { nombre: nombre, apellido: apellido, grado: grado },
            headers: { 'Content-Type': 'application/json' }
        }).done( () => window.location = "/");
    };

    return (
        <>
            <h2>Nuevo Alumno</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='nombre'>Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={(e)=>setNombre(e.target.value)} />
                <label htmlFor="apellido">Apellidos</label>
                <input type="text" id="apellido" name="apellido" onChange={(e)=>setApellido(e.target.value)} />
                <label htmlFor="grado">Grado</label>
                <input type="text" id="grado" name="grado" onChange={(e)=>setGrado(e.target.value)} />
                <input type='submit' value="Nuevo Alumno"></input>
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageNuevoAlumno;