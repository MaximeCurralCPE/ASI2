package com.cpe.springboot.msgemitter;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.jms.annotation.EnableJms;
import org.springframework.jms.support.destination.DynamicDestinationResolver;

import javax.jms.Destination;
import javax.jms.JMSException;
import javax.jms.Session;

@EnableJms
@SpringBootApplication
public class App {

    @Bean
    public DynamicDestinationResolver destinationResolver() {
        return new DynamicDestinationResolver() {
            @Override
            public Destination resolveDestinationName(Session session, String destinationName, boolean pubSubDomain) throws JMSException {
                String prefixTopic = "topic.";
                String prefixQueue = "queue.";
                if (destinationName.startsWith(prefixTopic) || destinationName.startsWith(prefixQueue)) {
                    if (destinationName.startsWith(prefixTopic)) {
                        pubSubDomain = true;
                        destinationName = destinationName.replace(prefixTopic, "");
                    } else {
                        destinationName = destinationName.replace(prefixQueue, "");
                    }
                }
                return super.resolveDestinationName(session, destinationName, pubSubDomain);
            }
        };
    }

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}
