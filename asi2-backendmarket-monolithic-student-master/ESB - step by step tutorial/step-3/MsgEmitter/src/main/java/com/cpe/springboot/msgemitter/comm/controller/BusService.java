package com.cpe.springboot.msgemitter.comm.controller;

import com.cpe.springboot.model.Poney;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

@Service
public class BusService {

    @Autowired
    JmsTemplate jmsTemplate;



    public void sendMsg(Poney poney) {
        System.out.println("[BUSSERVICE] SEND String MSG=["+poney+"]");
        jmsTemplate.convertAndSend("RESULT_BUS_MNG",poney);
    }

    public void sendMsg(Poney poney, String busName) {
        System.out.println("[BUSSERVICE] SEND String MSG=["+poney+"] to Bus=["+poney+"]");
        jmsTemplate.convertAndSend(busName,poney);
    }
}
