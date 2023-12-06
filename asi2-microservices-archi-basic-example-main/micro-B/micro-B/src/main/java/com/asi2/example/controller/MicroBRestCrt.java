package com.asi2.example.controller;

import java.util.List;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.asi2.example.b.model.BImgDTO;

@RestController
public class MicroBRestCrt {
	private final MicroBService bService;
	
	public MicroBRestCrt(MicroBService bService) {
		this.bService=bService;
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/bimg")
	public List<BImgDTO> getBImgList() {
		return this.bService.getAllBImg();
	}
	
	@RequestMapping(method = RequestMethod.POST, value = "/bimg")
	private Integer addBImg(@RequestBody BImgDTO b) {
		return bService.addBImg(b);
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "/random")
	public BImgDTO getBImgRand() {
		return bService.getRand();
		}
	}
