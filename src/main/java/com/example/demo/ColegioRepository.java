package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel = "colegios", path = "colegios")
public interface ColegioRepository extends CrudRepository<Colegio, Long> {

}