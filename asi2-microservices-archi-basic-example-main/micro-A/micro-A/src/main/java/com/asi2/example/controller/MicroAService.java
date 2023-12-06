package com.asi2.example.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.asi2.example.a.model.ACollectionDTO;
import com.asi2.example.a.model.ChuckApiModel;
import com.asi2.example.b.model.BImgDTO;
import com.asi2.example.model.ACollection;
import com.asi2.example.tools.ACollectionMapper;
import com.asi2.example.tools.ApiCallerTool;

@Service
public class MicroAService {
	private final MicroARepository aRepo;
	
	public MicroAService(MicroARepository aRepo) {
		this.aRepo=aRepo;
	}

	public List<ACollectionDTO> getAllACollection() {
		List<ACollectionDTO> aDtoList=new ArrayList<ACollectionDTO>();
		Iterable<ACollection> aList = aRepo.findAll();
		for(ACollection a:aList) {
			aDtoList.add(ACollectionMapper.FromACollectionToDTO(a));
		}
		return aDtoList;
	}

	public Integer addAcollection(ACollectionDTO aDTO) {
		ACollection a = ACollectionMapper.FromDTOTOACollection(aDTO);
		BImgDTO bDTO=ApiCallerTool.callBImgGetRandom();
		a.setbImgRef(bDTO.getId());
		ChuckApiModel chuck = ApiCallerTool.callChuckApi();
		a.setDescription(aDTO.getDescription() + "\n" +chuck.getValue());
		ACollection aInDb = aRepo.save(a);
		return aInDb.getId();
	}

}
