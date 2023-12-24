package com.cpe.springboot.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

import com.cpe.springboot.user.model.AuthDTO;
import com.cpe.springboot.user.model.UserDTO;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import com.cpe.springboot.user.model.UserModel;

@Service
public class BusService {
    
    @Autowired
    JmsTemplate jmsTemplate;

    public void sendMsg(UserModel u) {
        System.out.println("[BUSSERVICE] SEND String MSG=["+u+"]");
        jmsTemplate.convertAndSend("RESULT_BUS_MNG",u);
    }

}
