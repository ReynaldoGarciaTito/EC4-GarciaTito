const React = require('react');
const client = require('../client');
const { render, Link } = require("react-router-dom");
const {useState} = require('react');

function PageNuevoInstrumento() {

    const [nombre,  setNombre] = useState("");
    const [categoria,  setCategoria] = useState("");
    const [descripcion,  setDescripcion] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'POST',
            path: '/api/instrumentos',
            entity: { nombre: nombre, categoria: categoria, descripcion: descripcion },
            headers: { 'Content-Type': 'application/json' }
        }).done( () => window.location = "/");
    };

    return (
        <>
            <h2>Nuevo Musico</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='nombre'>Nombre</label>
                <input type="text" id="nombre" name="nombre" onChange={(e)=>setNombre(e.target.value)} />
                <label htmlFor="categoria">Categoria</label>
                <input type="text" id="categoria" name="categoria" onChange={(e)=>setCategoria(e.target.value)} />
                <label htmlFor="descripcion">Descripcion</label>
                <input type="text" id="descripcion" name="descripcion" onChange={(e)=>setDescripcion(e.target.value)} />
                <input type='submit' value="Nuevo Instrumento"></input>
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageNuevoInstrumento;