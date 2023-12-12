# Simple Message Emitter and Received
## Springboot Msg Emitter

### 1 Create a springboot project as artefact.id `MsgEmitter`
Exemple de création de projet Springboot disponible ici [https://gitlab.com/js-as1/asi1-springboot-tuto/-/tree/master/step0](https://gitlab.com/js-as1/asi1-springboot-tuto/-/tree/master/step0)

### 2 Add the following dependencies to your **pom.xml** file:
```xml
    ...
            <dependency>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-activemq</artifactId>
            </dependency>
            <dependency>
                <groupId>org.apache.activemq</groupId>
                <artifactId>activemq-broker</artifactId>
            </dependency>
    ...

```

These dependencies allow to use an embedded activmq server if needed (```activemq-broker```) and use activemq and Jms specification to send and receive messages (```spring-boot-starter-activemq```)



### 3 Configure the JMS usage

Apply the following modificaiton to your main java file (e.g App.java)

```java
package com.cpe.springboot.msgemitter;

import ...

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
```

Explanation: 

```java
       @Autowired
       JmsTemplate jmsTemplate;
```

* Inject the dependence JmsTemplate used by the project. This object could be used as soon as application server create an instance of it (linked to activemq dependency)

```java
    @EventListener(ApplicationReadyEvent.class)
    public void doInitAfterStartup() {
        jmsTemplate.setPubSubDomain(true);
    }
```
* Default bus communication is queue. this line enable topic default communication mode and is executed after the application started (``` @EventListener(ApplicationReadyEvent.class)``` )

### 4 Create a BusService to communicate with the Bus

Add a **controller** package to your project structure. 

Add the following file, **BusService**, as follow:

```java
package com.cpe.springboot.msgemitter.comm.controller;

import ...

@Service
public class BusService {

    @Autowired
    JmsTemplate jmsTemplate;

    public void sendMsg(String msg) {
        System.out.println("[BUSSERVICE] SEND String MSG=["+msg+"]");
        jmsTemplate.convertAndSend("RESULT_BUS_MNG",msg);
    }

    public void sendMsg(String msg, String busName) {
        System.out.println("[BUSSERVICE] SEND String MSG=["+msg+"] to Bus=["+msg+"]");
        jmsTemplate.convertAndSend(busName,msg);
    }
}
```

Explanation
```java
 @Autowired
JmsTemplate jmsTemplate;
```

Get the jmsTemplate instance that is used to send and received message through the communication bus.


```java
jmsTemplate.convertAndSend("RESULT_BUS_MNG",msg);
```

Send a message to the bus channel *RESULT_BUS_MNG* with content *msg*. The convertion offers by this function will be usefull when using Java object.


### 5 Add a Rest Controller (e.g MsgEmitterRestController.java) as follow:
```java
package com.cpe.springboot.msgemitter.comm;

import ...

@RestController
public class MsgEmitterRestController {

    @Autowired
    BusService busService;

    @RequestMapping(method = RequestMethod.POST, value = "/sendmsg")
    public boolean sendInform(@RequestBody String msg) {
        busService.sendMsg(msg);
        return true;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/sendmsg/{busName}")
    public boolean sendInform(@RequestBody String msg, @PathVariable String busName) {
        busService.sendMsg(msg,busName);
        return true;
    }
}

```
### 6 Update application.properties
- Create the `application.properties` into `./src/main/resources/` as follow if the file does not exist:
```
server.address=127.0.0.1
server.port=8082
spring.activemq.broker-url=tcp://localhost:61616
spring.activemq.user=admin
spring.activemq.password=admin
spring.activemq.packages.trust-all=true
spring.activemq.non-blocking-redelivery= true
```

### 7 Compile and check behavior

* Compile your project and start it
* Start your local activeMq communication Bus (see installation instructions [here](https://activemq.apache.org/getting-started#InstallationProcedureforUnix) )

```
cd [activemq_install_dir]/bin
./activemq console
```

- Open the activemq web console at **localhost:8161** and look at the topics section
- Send a message to your SpringBoot application (e.g [postman](https://www.getpostman.com/)) with the following parameters:

  - HTTP METHOD: ```POST```

  - URL:         ```localhost:8080/sendmsg```  (note **8080** refers to the port defined in the application.properties file of your MsgEmitter SpringBoot project) 
  - Body: ``` message 1 ```

- On the activemq web console at **localhost:8161** checks that a new bus channel is created with one message enqueued

- Repeat this test by changing the channel name via the URL ```localhost:8080/sendmsg/<channel name>```
