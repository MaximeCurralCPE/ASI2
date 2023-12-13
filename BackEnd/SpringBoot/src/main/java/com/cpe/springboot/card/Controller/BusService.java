package com.cpe.springboot.card.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

@Service
public class BusService {
    
    @Autowired
    JmsTemplate jmsTemplate;

    public void sendmsg(String msg) {
        System.out.println("[BUSSERVICE] Sending msg [" + msg + "]");
        jmsTemplate.convertAndSend("RESULT_BUS_MNG", msg);
    }

    public void sendmsg(String msg, String busName) {
        System.out.println("[BUSSERVICE] Sending msg [" + msg + "] to bus [" + busName + "]");
        jmsTemplate.convertAndSend(busName, msg);
    }
}
