package com.cpe.springboot.msgemitter;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jms.DefaultJmsListenerContainerFactoryConfigurer;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.Bean;
import org.springframework.context.event.EventListener;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.config.DefaultJmsListenerContainerFactory;
import org.springframework.jms.config.JmsListenerContainerFactory;
import org.springframework.jms.core.JmsTemplate;

import javax.jms.ConnectionFactory;

@EnableJms
@SpringBootApplication
public class App {

    @Autowired
    JmsTemplate jmsTemplate;

    /**
     * Executed after application start
     */
    @EventListener(ApplicationReadyEvent.class)
    public void doInitAfterStartup() {
        //enable to be in topic mode! to do at start
        jmsTemplate.setPubSubDomain(true);
    }

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}
