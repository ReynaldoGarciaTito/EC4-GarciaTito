const React = require('react');
const client = require('../client');
const { render, Link } = require("react-router-dom");
const {useState} = require('react');

function PageNuevoMusico() {

    const [nombre, setNombre] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/musicos',
            entity: { nombre: nombre },
            headers: { 'Content-Type': 'application/json' }
        }).done( () => window.location = "/");
    };

    return (
        <>
            <h2>Nuevo Musico</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='nombre'>Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={(e)=>setNombre(e.target.value)} />
                <input type='submit' value="Nuevo Musico"></input>
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageNuevoMusico;