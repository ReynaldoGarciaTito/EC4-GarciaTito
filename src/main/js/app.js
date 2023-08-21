const React = require('react');
const ReactDOM = require('react-dom');
const { createBrowserRouter, RouterProvider } = require('react-router-dom');

const App = require('./pages/home');
const PageNuevoMusico = require('./pages/nuevo-musico');
const PageNuevoInstrumento = require('./pages/nuevo-instrumento');
const PageNuevaBanda = require('./pages/nueva-banda');
const PageEditarMusico = require('./pages/editar-musico');
const PageEditarInstrumento = require('./pages/editar-instrumento');

const router = createBrowserRouter([
	{path: '/', element: <App></App>},
	{path: '/nuevo-musico', element: <PageNuevoMusico></PageNuevoMusico>},
	{path: '/nueva-banda', element: <PageNuevaBanda></PageNuevaBanda>},
	{path: '/editar-musico/:id', element: <PageEditarMusico></PageEditarMusico>},
	{path: '/editar-instrumento/:id', element: <PageEditarInstrumento></PageEditarInstrumento>},
	{path: '/nuevo-instrumento', element: <PageNuevoInstrumento></PageNuevoInstrumento>},
]);

ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router}>
		</RouterProvider>
	</React.StrictMode>,
	document.getElementById('react')
)