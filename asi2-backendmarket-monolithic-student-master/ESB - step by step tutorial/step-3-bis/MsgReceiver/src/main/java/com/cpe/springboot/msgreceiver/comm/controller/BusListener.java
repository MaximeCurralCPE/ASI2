package com.cpe.springboot.msgreceiver.comm.controller;

import com.cpe.springboot.model.Poney;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;

import javax.jms.JMSException;
import javax.jms.TextMessage;
import java.io.IOException;

@Component
public class BusListener {

    @Autowired
    JmsTemplate jmsTemplate;

    @Autowired
    FakePoneyDao poneyDao;

    @Autowired
    ObjectMapper objectMapper;

    private void doReceive(String busName, TextMessage message) {
        try {
            String clazz = message.getStringProperty("ObjectType");
            Object o = objectMapper.readValue(message.getText(), Class.forName(clazz));

            if (o instanceof Poney) {
                Poney poney = (Poney)o;
                poneyDao.addPoney(poney);
            }

            System.out.println("[BUSLISTENER] [CHANNEL "+busName+"] RECEIVED String MSG=["+message.getText()+"]");
        } catch (IOException | JMSException | ClassNotFoundException  e) {
            throw new RuntimeException(e);
        }
    }

    @JmsListener(destination = "RESULT_BUS_MNG", containerFactory = "queueConnectionFactory")
    public void receiveMessageResult(TextMessage message) {
        doReceive("RESULT_BUS_MNG", message);
    }

    @JmsListener(destination = "A", containerFactory = "queueConnectionFactory")
    public void receiveMessageA(TextMessage message) {
        doReceive("A", message);
    }

    @JmsListener(destination = "B", containerFactory = "topicConnectionFactory")
    public void receiveMessageB(TextMessage message) {
        doReceive("B", message);
    }
}
