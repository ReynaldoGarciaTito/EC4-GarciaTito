const React = require('react');
const ReactDOM = require('react-dom');
const { createBrowserRouter, RouterProvider } = require('react-router-dom');

const App = require('./pages/home');


const PageEditarAlumno = require('./pages/editar-alumno');
const PageNuevoAlumno = require('./pages/nuevo-alumno');
const PageNuevoColegio= require('./pages/nuevo-colegio');
const PageVerColegio = require('./pages/ver-colegio');
const PageNuevaMatricula = require('./pages/nueva-matricula');

const router = createBrowserRouter([
	{path: '/', element: <App></App>},
	{path: '/editar-alumno/:id', element: <PageEditarAlumno></PageEditarAlumno>},
	{path: '/nuevo-alumno', element: <PageNuevoAlumno></PageNuevoAlumno>},
	{path: '/nuevo-colegio', element: <PageNuevoColegio></PageNuevoColegio>},
	{path: '/ver-colegio/:id', element: <PageVerColegio></PageVerColegio>},
	{path: '/ver-colegio/:id/nueva-matricula', element: <PageNuevaMatricula></PageNuevaMatricula>},
]);

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router}>
		</RouterProvider>
	</React.StrictMode>,
	document.getElementById('react')
)