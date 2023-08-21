const React = require('react');
const client = require('../client');
const { render, Link } = require("react-router-dom");
const {useState} = require('react');

function PageNuevaBanda() {

    const [nombre, setNombre] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/bandas',
            entity: { nombre: nombre },
            headers: { 'Content-Type': 'application/json' }
        }).done( () => window.location = "/");
    };

    return (
        <>
            <h2>Nueva Banda</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='nombre'>Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={(e)=>setNombre(e.target.value)} />
                <input type='submit' value="Nueva Banda"></input>
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageNuevaBanda;