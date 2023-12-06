package com.asi2.example.a.model;

public class ACollectionDTO {
	
	private Integer id;
	private String title;
	private Integer bImgRef;
	private String description;
	
	
	public ACollectionDTO() {
	}

	public ACollectionDTO(Integer id, String title, Integer bImgRef, String description) {
		super();
		this.id = id;
		this.title = title;
		this.bImgRef = bImgRef;
		this.description = description;
	}


	public Integer getId() {
		return id;
	}


	public void setId(Integer id) {
		this.id = id;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public Integer getbImgRef() {
		return bImgRef;
	}


	public void setbImgRef(Integer bImgRef) {
		this.bImgRef = bImgRef;
	}


	public String getDescription() {
		return description;
	}


	public void setDescription(String description) {
		this.description = description;
	}
	
	

}
