const React = require('react');
const { useState, useEffect } = require('react');
const { useParams } = require('react-router-dom');
const client = require('../client');
const { Link } = require('react-router-dom');

const PageVerColegio = () => {

    let { id } = useParams();
    const [colegio, setColegio] = useState({});
    const [matriculas, setMatriculas] = useState([]);

    useEffect(() => {

        const url_colegio = '/api/colegios/' + id

        client({
            method: 'GET',
            path: url_colegio
        }).done((response) => { setColegio(response.entity); })

        client({
            method: 'GET',
            path: url_colegio + '/formacion'
        }).done((response) => { setMatriculas(response.entity); })
    }, []);

    return (
        <>
            <h1>Ver Colegio</h1>

            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <td>{colegio.nombre}</td>
                    </tr>
                </tbody>
            </table>

            <hr />

            <table border="1">
                <thead>
                    <tr>
                        <th colSpan="2">Matriculas</th>
                    </tr>
                    <tr>
                        <th>Alumnos</th>
                    </tr>
                </thead>
                <tbody>
                    {matriculas.map(matricula => {
                        return (
                            <tr key={matricula.ID}>
                                <td>{matricula.ALUMNO}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <Link to={`/ver-colegio/${id}/nueva-matricula`}>Nueva Matricula</Link> | <Link to="/">Volver</Link>
        </>
    );
}

module.exports = PageVerColegio;