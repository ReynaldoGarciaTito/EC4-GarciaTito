package com.example.demo;

import java.util.Objects;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Matricula {

    private @Id @GeneratedValue Long id;

    @ManyToOne()
    @JoinColumn(name = "id_colegio")
    private Colegio colegio;

    @ManyToOne()
    @JoinColumn(name = "id_alumno")
    private Alumno alumno;

    public Matricula() {
    }

    public Matricula(Colegio colegio, Alumno alumno) {
        this.colegio = colegio;
        this.alumno = alumno;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Colegio getColegio() {
        return colegio;
    }

    public void setColegio(Colegio colegio) {
        this.colegio = colegio;
    }

    public Alumno getAlumno() {
        return alumno;
    }

    public void setAlumno(Alumno alumno) {
        this.alumno = alumno;
    }
}