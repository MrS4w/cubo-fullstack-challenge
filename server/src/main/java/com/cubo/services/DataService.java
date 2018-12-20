package com.cubo.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cubo.domain.Data;
import com.cubo.repositories.DataRepository;
import com.cubo.services.exception.ObjectNotFoundException;

@Service
public class DataService {
	@Autowired
	private DataRepository repo;

	public Data find(Integer id) {
		Data obj = repo.findOne(id);
		if (obj == null) {
			throw new ObjectNotFoundException("Objeto não encontrado!" + "Id: " + id + "Tipo: " + Data.class.getName());
		}
		return obj;
	}
	
	public Data insert(Data obj) {
		obj.setId(null);
		return repo.save(obj);
	}

	public Data update(Data obj) {
		find(obj.getId());
		return repo.save(obj);
	}

	public void delete(Integer id) {
		find(id);
		repo.delete(id);
	}

	public List<Data> findAll() {
		return repo.findAll();
	}
}
