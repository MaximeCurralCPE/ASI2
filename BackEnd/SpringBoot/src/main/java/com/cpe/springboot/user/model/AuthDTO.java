package com.cpe.springboot.user.model;

public class AuthDTO {
	private String username;
	private String password;
	
	public AuthDTO() {
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
	
}
