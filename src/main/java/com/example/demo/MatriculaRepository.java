package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "matriculas", path = "matriculas")
public interface MatriculaRepository extends CrudRepository<Matricula, Long> {

}