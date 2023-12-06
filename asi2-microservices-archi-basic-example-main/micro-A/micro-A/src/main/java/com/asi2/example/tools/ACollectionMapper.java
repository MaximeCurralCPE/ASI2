package com.asi2.example.tools;

import com.asi2.example.a.model.ACollectionDTO;
import com.asi2.example.model.ACollection;

public class ACollectionMapper {
	
	public static ACollectionDTO FromACollectionToDTO(ACollection a){
		ACollectionDTO aDTO=new ACollectionDTO();
		aDTO.setId(a.getId());
		aDTO.setTitle(a.getTitle());
		aDTO.setDescription(a.getDescription());
		aDTO.setbImgRef(a.getbImgRef());
		return aDTO;
	}
	
	public static ACollection FromDTOTOACollection(ACollectionDTO aDTO) {
		ACollection a=new ACollection();
		a.setId(aDTO.getId());
		a.setTitle(aDTO.getTitle());
		a.setDescription(aDTO.getDescription());
		a.setbImgRef(aDTO.getbImgRef());
		return a;
	}

}
