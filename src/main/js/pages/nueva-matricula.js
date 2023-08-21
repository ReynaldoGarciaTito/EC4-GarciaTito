const React = require('react');
const {useState, useEffect} = require('react');
const { Link,useParams } = require('react-router-dom');
const client = require('../client');


const PageNuevaMatricula= () => {

    let { id } = useParams();
    const [alumnos, setAlumnos] = useState([])
    const [idAlumno, setIdAlumno] = useState('')

    const handleSubmit = (evento)=>{
        evento.preventDefault();
        client({
            method: 'POST',
            path: '/api/matriculas',
            entity: {
                colegio: 'http://localhost:8080/api/colegios/'+id,
                alumno: 'http://localhost:8080/api/alumnos/'+idAlumno},
            headers: {'Content-Type': 'application/json'}
        }).done(()=>{
           window.location = '/';
        })
    }

    useEffect(() => {
        client({
            method: 'GET',
            path: '/api/alumnos'
        }).done(response=>{
            let alumnos2 = [];
            response.entity._embedded.alumnos.map(alumno => {
                alumnos2.push({value: alumno._links.self.href.split('/').slice(-1), label: alumno.nombre})
            })
            setAlumnos(alumnos2)
        })

    },[])

    return (
        <>
            <h1>Nueva Matricula</h1>
            <form onSubmit={handleSubmit}>

                <label>Alumnos</label>
                <select name="alumno" id="alumno" onChange={(e)=>{setIdAlumno(e.target.value)}}>
                    {alumnos.map(alumno => {	
                        return (
                            <option key={alumno.value} value={alumno.value}>{alumno.label}</option>
                        )
                    })}
                </select>

                <input type="submit" value="Nueva Matricula" />

            </form>
            <Link to="/">Volver</Link>
        </>
    )
}

module.exports = PageNuevaMatricula;