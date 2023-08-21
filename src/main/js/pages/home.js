const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { alumnos: [], colegios: []};
    }

    componentDidMount() {
        client({ method: 'GET', path: '/api/alumnos' }).done(response => {
            this.setState({ alumnos: response.entity._embedded.alumnos });
        });
        client({ method: 'GET', path: '/api/colegios' }).done(response => {
			this.setState({ colegios: response.entity._embedded.colegios });
		});
    }

    render() {
        return (
            <>
                <center>
                    <h1>EC4 - GARCIA TITO</h1>
                    <div className='row'>
                        <div style={{ "width": "100%", "display": "flex" }}>
                            <div style={{ "width": "calc(100%/1)" }} >
                                <Titulo entidad="Alumno" emoji="🏫" />
                                <AlumnosList alumnos={this.state.alumnos} />
                                <br></br>
                                <Link to="/nuevo-alumno">Nuevo Alumno</Link>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div style={{ "width": "100%", "display": "flex" }}>
                            <div style={{ "width": "calc(100%/1)" }} >
                                <Titulo entidad="Colegio" emoji="👨‍🎓" />
                                <ColegioList colegios={this.state.colegios} />
                                <br></br>
                                <Link to="/nuevo-colegio">Nuevo Colegio</Link>
                            </div>
                        </div>
                    </div>

                </center>

            </>
        )
    }
}

const Titulo = (props) => {
    return (
        <>
            <hr />
            <h2>{props.emoji} - {props.entidad}</h2>
            <span>Listado de {props.entidad.toLowerCase()}</span>
            <hr />
        </>
    )
}

class AlumnosList extends React.Component {
    render() {
        const alumnos = this.props.alumnos.map(alumno =>
            <Alumno key={alumno._links.self.href} alumno={alumno} />
        );
        return (
            <>
                <center>
                    <table border="1">
                        <tbody>
                            <tr>
                                <th>Nombres</th>
                                <th>Apellidos</th>
                                <th>Grado</th>
                                <th>Acciones</th>
                            </tr>
                            {alumnos}
                        </tbody>
                    </table>
                </center>

            </>
        )
    }
}

class ColegioList extends React.Component {
    render() {
        const colegios = this.props.colegios.map(colegio =>
            <Colegio key={colegio._links.self.href} colegio={colegio} />
        );
        return (
            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                    {colegios}
                </tbody>
            </table>
        )
    }
}


class Alumno extends React.Component {
    render() {
        const id = this.props.alumno._links.self.href.split("/").slice(-1);
        return (
            <tr>
                <td>{this.props.alumno.nombre}</td>
                <td>{this.props.alumno.apellido}</td>
                <td>{this.props.alumno.grado}</td>
                <td>
                    <Link to={`/editar-alumno/${id}`}>Editar</Link>
                </td>
            </tr>
        )
    }
}

class Colegio extends React.Component {
    render() {
        const id = this.props.colegio._links.self.href.split("/").slice(-1);
        return (
            <tr>
                <td>{this.props.colegio.nombre}</td>
                <td>
                    <Link to={`/ver-colegio/${id}`}>Ver</Link>
                </td>
            </tr>
        )
    }
}



module.exports = App;