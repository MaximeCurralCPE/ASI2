package com.asi2.example.b.model;

import java.util.List;

public class BImgDTO {
	private Integer id;
	private String title;
	private List<String> tagList;
	private String imgURL;
	
	
	public BImgDTO() {
	}

	public BImgDTO(Integer id, String title, List<String> tagList, String imgURL) {
		super();
		this.id = id;
		this.title = title;
		this.tagList = tagList;
		this.imgURL = imgURL;
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


	public List<String> getTagList() {
		return tagList;
	}


	public void setTagList(List<String> tagList) {
		this.tagList = tagList;
	}


	public String getImgURL() {
		return imgURL;
	}


	public void setImgURL(String imgURL) {
		this.imgURL = imgURL;
	}
	
}
