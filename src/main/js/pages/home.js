const React = require('react');
const client = require('../client');
const { Link } = require('react-router-dom');

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = { alumnos: [] };
    }

    componentDidMount() {
        client({ method: 'GET', path: '/api/alumnos' }).done(response => {
            this.setState({ alumnos: response.entity._embedded.alumnos });
        })
    }

    render() {
        return (
            <>
                <center>
                    <h1>EC4 - GARCIA TITO</h1>

                    <div style={{ "width": "100%", "display": "flex" }}>
                        <div style={{ "width": "calc(100%/1)" }} >
                            <Titulo entidad="Alumno" emoji="🎸" />
                            <AlumnosList alumnos={this.state.alumnos} />
                            <br></br>
                            <Link to="/nuevo-instrumento">Nuevo Alumno</Link>
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
            <h2>{props.emoji} . {props.entidad}</h2>
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

class MusicoList extends React.Component {
    render() {
        const musicos = this.props.musicos.map(musico =>
            <Musico key={musico._links.self.href} musico={musico} />
        );
        return (
            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                    {musicos}
                </tbody>
            </table>
        )
    }
}

class BandaList extends React.Component {
    render() {
        const bandas = this.props.bandas.map(banda =>
            <Banda key={banda._links.self.href} banda={banda} />
        );
        return (
            <table border="1">
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Acciones</th>
                    </tr>
                    {bandas}
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
                    <Link to={`/editar-instrumento/${id}`}>Editar</Link>
                </td>
            </tr>
        )
    }
}

class Musico extends React.Component {
    render() {
        const id = this.props.musico._links.self.href.split("/").slice(-1);
        return (
            <tr>
                <td>{this.props.musico.nombre}</td>
                <td>
                    <Link to={`/editar-musico/${id}`}>Editar</Link>
                </td>
            </tr>
        )
    }
}

class Banda extends React.Component {
    render() {
        const id = this.props.banda._links.self.href.split("/").slice(-1);
        return (
            <tr>
                <td>{this.props.banda.nombre}</td>
                <td>
                    <Link to={`/editar-banda/${id}`}>Ver</Link>
                </td>
            </tr>
        )
    }
}


module.exports = App;