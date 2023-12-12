package com.cpe.springboot.msgreceiver.comm.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.annotation.JmsListener;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Component;

import javax.jms.Message;

@Component
public class BusListener {

    @Autowired
    JmsTemplate jmsTemplate;

    @JmsListener(destination = "RESULT_BUS_MNG", containerFactory = "connectionFactory")
    public void receiveMessageResult(String msgStr, Message message) {

            System.out.println("[BUSLISTENER] [CHANNEL RESULT_BUS_MNG] RECEIVED String MSG=["+msgStr+"]");

    }

    @JmsListener(destination = "A", containerFactory = "connectionFactory")
    public void receiveMessageA(String msgStr, Message message) {

        System.out.println("[BUSLISTENER] [CHANNEL A] RECEIVED String MSG=["+msgStr+"]");

    }

    @JmsListener(destination = "B", containerFactory = "connectionFactory")
    public void receiveMessageB(String msgStr, Message message) {

        System.out.println("[BUSLISTENER] [CHANNEL B] RECEIVED String MSG=["+msgStr+"]");

    }
}
