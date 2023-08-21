package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final InstrumentoRepository repositoryInstrumento;
	private final MusicoRepository repositoryMusico;
	private final BandaRepository repositoryBanda;

	@Autowired
	public DatabaseLoader(InstrumentoRepository repositoryInstrumento, MusicoRepository repositoryMusico, BandaRepository repositoryBanda) {
		this.repositoryInstrumento = repositoryInstrumento;
		this.repositoryMusico = repositoryMusico;
		this.repositoryBanda = repositoryBanda;

	}

	@Override
	public void run(String... strings) throws Exception {
		this.repositoryInstrumento
				.save(new Instrumento("Guitarra", "Instrumento de cuerda", "De madera, con una caja de resonancia"));
		this.repositoryInstrumento.save(
				new Instrumento("Ukelele", "Instrumento de viento", "De madera, con una caja de resonancia potente"));
		this.repositoryMusico.save(
				new Musico("Jimi Hendrix"));
		this.repositoryMusico.save(
				new Musico("Eric Clapton"));
		this.repositoryBanda.save(
				new Banda("Aerosmith"));
		this.repositoryBanda.save(
				new Banda("Grupo 5"));
	}
}