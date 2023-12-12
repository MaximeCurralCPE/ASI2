package com.cpe.springboot.msgemitter.comm.controller;

import com.cpe.springboot.model.Poney;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

import javax.jms.TextMessage;

@Service
public class BusService {

    @Autowired
    JmsTemplate jmsTemplate;

    @Autowired
    ObjectMapper objectMapper;

    public void sendMsg(Poney poney) {
        sendMsg(poney, "RESULT_BUS_MNG");
    }

    public void sendMsg(Poney poney, String busName) {
        System.out.println("[BUSSERVICE] SEND String MSG=["+poney+"] to Bus=["+busName+"]");

        jmsTemplate.send(busName, s -> {
            try {
                TextMessage msg = s.createTextMessage(objectMapper.writeValueAsString(poney));
                msg.setStringProperty("Content-Type", "application/json");
                msg.setStringProperty("ObjectType", poney.getClass().getCanonicalName());

                return msg;
            } catch (JsonProcessingException e) {
                throw new RuntimeException(e);
            }
        });
    }
}
