package com.cpe.springboot.msgreceiver.comm.controller;

import com.cpe.springboot.model.Poney;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;

import javax.jms.Message;

@Component
public class BusListener {

    @Autowired
    JmsTemplate jmsTemplate;

    @Autowired
    FakePoneyDao poneyDao;

    @JmsListener(destination = "RESULT_BUS_MNG", containerFactory = "connectionFactory")
    public void receiveMessageResult(Poney poney, Message message) {

            System.out.println("[BUSLISTENER] [CHANNEL RESULT_BUS_MNG] RECEIVED String MSG=["+poney+"]");
        poneyDao.addPoney(poney);

    }

    @JmsListener(destination = "A", containerFactory = "connectionFactory")
    public void receiveMessageA(Poney poney, Message message) {

        System.out.println("[BUSLISTENER] [CHANNEL A] RECEIVED String MSG=["+poney+"]");
        poneyDao.addPoney(poney);

    }

    @JmsListener(destination = "B", containerFactory = "connectionFactory")
    public void receiveMessageB(Poney poney, Message message) {

        System.out.println("[BUSLISTENER] [CHANNEL B] RECEIVED String MSG=["+poney+"]");
        poneyDao.addPoney(poney);

    }
}
