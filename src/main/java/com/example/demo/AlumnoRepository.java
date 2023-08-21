package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "alumnos", path = "alumnos")
public interface AlumnoRepository extends CrudRepository<Alumno, Long> {

}