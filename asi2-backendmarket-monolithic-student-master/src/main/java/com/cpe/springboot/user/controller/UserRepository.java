package com.cpe.springboot.user.controller;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cpe.springboot.user.model.UserModel;

public interface UserRepository extends CrudRepository<UserModel, Integer> {
	
	List<UserModel> findByLoginAndPwd(String login,String pwd);

}
