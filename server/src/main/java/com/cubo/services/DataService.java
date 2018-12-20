package com.cubo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cubo.domain.Data;
import com.cubo.repositories.DataRepository;

@Service
public class DataService {
	@Autowired
	private DataRepository repo;

	public Data find(Integer id) {
		Data obj = repo.findOne(id);
		return obj;
	}
}
