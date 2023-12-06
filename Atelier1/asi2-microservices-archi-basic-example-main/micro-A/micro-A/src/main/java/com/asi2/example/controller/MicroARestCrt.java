package com.asi2.example.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.asi2.example.a.model.ACollectionDTO;

@RestController
public class MicroARestCrt {
	private final MicroAService aService;
	
	public MicroARestCrt(MicroAService aService) {
		this.aService=aService;
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/acollection")
	public List<ACollectionDTO> getACollectionList() {
		return this.aService.getAllACollection();
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/acollection")
	private Integer addACollection(@RequestBody ACollectionDTO a) {
		return aService.addAcollection(a);
	}
}
