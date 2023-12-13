package com.asi2.example.controller;

import org.springframework.data.repository.CrudRepository;

import com.asi2.example.model.ACollection;

public interface MicroARepository extends CrudRepository<ACollection, Integer> {

}
