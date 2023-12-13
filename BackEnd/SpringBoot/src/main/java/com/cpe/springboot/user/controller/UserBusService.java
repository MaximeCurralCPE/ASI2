package com.cpe.springboot.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

@Service
public class UserBusService {
    
    @Autowired
    JmsTemplate jmsTemplate;

    public void sendmsg(String msg) {
        System.out.println("[UserBusService] sending ["+msg+"]");
        jmsTemplate.convertAndSend("RESULT_BUS_MNG", msg);
    }

    public void sendmsg(String msg, String busName) {
        System.out.println("[UserBusService] sending ["+msg+"] to ["+busName+"]");
        jmsTemplate.convertAndSend(busName, msg);
    }


}
