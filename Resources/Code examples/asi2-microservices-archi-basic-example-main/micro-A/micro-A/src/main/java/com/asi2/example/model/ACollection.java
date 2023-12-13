package com.asi2.example.model;

import java.util.UUID;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class ACollection {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Integer id;
	private String title;
	private Integer bImgRef;
	private String description;
	private String secret_id;
	
	public ACollection() {
		UUID UUID_1 = UUID.randomUUID(); 
		this.secret_id = UUID_1.toString();
	}

	public ACollection(String title, Integer bImgRef, String description) {
		super();
		this.title = title;
		this.bImgRef = bImgRef;
		this.description = description;
		 UUID UUID_1 = UUID.randomUUID(); 
		this.secret_id = UUID_1.toString();
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
	
	public String getSecret_id() {
		return secret_id;
	}
	
}
