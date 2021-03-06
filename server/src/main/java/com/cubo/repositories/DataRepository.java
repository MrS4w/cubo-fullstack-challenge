package com.cubo.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cubo.domain.Data;

@Repository
public interface DataRepository extends JpaRepository<Data, Integer> {

}
