const React = require('react');
const client = require('../client');
const { render, Link, useParams } = require("react-router-dom");
const { useState, useEffect } = require('react');

function PageEditarInstrumento() {

    const [instrumento, setInstrumento] = useState({});

    let { id } = useParams();

    useEffect(() => {
        client({ method: 'GET', path: '/api/instrumentos/' + id }).done(response => {
            setInstrumento(response.entity);
        });
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        client({
            method: 'PATCH',
            path: '/api/instrumentos/' + id,
            entity: instrumento,
            headers: { 'Content-Type': 'application/json' }
        }).done(() => window.location = "/");
    };

    return (
        <>
            <h2>Editar Instrumento</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor='nombre'>Nombre</label>
                <input type="text" id="nombre" name="nombre" value={instrumento.nombre} onChange={(e) => setInstrumento({...instrumento, nombre: e.target.value })} />
                <label htmlFor='categoria'>Categoria</label>
                <input type="text" id="categoria" name="categoria" value={instrumento.categoria} onChange={(e) => setInstrumento({...instrumento, categoria: e.target.value })} />
                <label htmlFor='nombre'>Descripcion</label>
                <input type="text" id="descripcion" name="descripcion" value={instrumento.descripcion} onChange={(e) => setInstrumento({...instrumento, descripcion: e.target.value })} />
                <input type='submit' value="Editar Instrumento"></input>
            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageEditarInstrumento;