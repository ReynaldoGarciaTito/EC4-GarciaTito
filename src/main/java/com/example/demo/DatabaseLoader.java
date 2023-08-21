package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final AlumnoRepository repositoryAlumno;
	private final ColegioRepository repositoryColegio;
	private final MatriculaRepository repositoryMatricula;

	@Autowired
	public DatabaseLoader(AlumnoRepository repositoryAlumno, ColegioRepository repositoryColegio,
			MatriculaRepository repositoryMatricula) {

		this.repositoryAlumno = repositoryAlumno;
		this.repositoryColegio = repositoryColegio;
		this.repositoryMatricula = repositoryMatricula;
	}

	@Override
	public void run(String... strings) throws Exception {

		Alumno Alum1 = new Alumno("Reynaldo", "Garcia Tito", "5to");
		this.repositoryAlumno.save(Alum1);
		Alumno Alum2 = new Alumno("Joel", "Perez Aguilar", "4to");
		this.repositoryAlumno.save(Alum2);
		Alumno Alum3 = new Alumno("Gustavo", "Ruiz Diaz", "6to");
		this.repositoryAlumno.save(Alum3);
		Alumno Alum4 = new Alumno("Bayron", "Cotrina Cuaresma", "5to");
		this.repositoryAlumno.save(Alum4);
		Alumno Alum5 = new Alumno("Jhimmy", "Clemente Lucas", "5to");
		this.repositoryAlumno.save(Alum5);
		Alumno Alum6 = new Alumno("JeanPierre", "Elias Rivas", "4to");
		this.repositoryAlumno.save(Alum6);

		Colegio Col1 = new Colegio("Maristas");
		this.repositoryColegio.save(Col1);
		Colegio Col2 = new Colegio("Saco Oliverios");
		this.repositoryColegio.save(Col2);
		Colegio Col3 = new Colegio("Prolog");
		this.repositoryColegio.save(Col3);

		Matricula Mat1 = new Matricula(Col1, Alum1);
		this.repositoryMatricula.save(Mat1);
		Matricula Mat2 = new Matricula(Col1, Alum2);
		this.repositoryMatricula.save(Mat2);
		Matricula Mat3 = new Matricula(Col3, Alum3);
		this.repositoryMatricula.save(Mat3);
		Matricula Mat4 = new Matricula(Col3, Alum4);
		this.repositoryMatricula.save(Mat4);
	}
}