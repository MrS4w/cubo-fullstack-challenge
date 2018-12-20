package com.cubo.resources;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cubo.domain.Data;

@RestController
@RequestMapping(value = "data")
public class DataResource {
	@RequestMapping(method = RequestMethod.GET)
	public List<Data> listar() {
		Data a1 = new Data(1, "Victor", "Antonio", 2.0);
		Data a2 = new Data(2, "Antonio", "Victor", 90.0);

		List<Data> lista = new ArrayList<>();
		lista.add(a1);
		lista.add(a2);
		return lista;
	}
}
