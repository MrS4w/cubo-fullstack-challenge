package com.cubo.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cubo.domain.Data;
import com.cubo.services.DataService;

@RestController
@RequestMapping(value = "/data")
public class DataResource {

	@Autowired
	private DataService service;

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public ResponseEntity<?> find(@PathVariable Integer id) {

		Data obj = service.find(id);

		return ResponseEntity.ok().body(obj);
	}

}
