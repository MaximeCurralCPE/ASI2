# Simple Message Emitter and Received
## Springboot Msg Receiver

### 1 Create a springboot project as artefact.id ```MsgReceiver```

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

### 3 Configure the communication bus

Apply the following modificaiton to your main java file (e.g App.java)

```java
package com.cpe.springboot.msgreceiver;

import ...

@EnableJms
@SpringBootApplication
public class App {

    @Autowired
    JmsTemplate jmsTemplate;

    @Bean
    public JmsListenerContainerFactory< ? > connectionFactory(ConnectionFactory connectionFactory,
                                                              DefaultJmsListenerContainerFactoryConfigurer configurer) {
        DefaultJmsListenerContainerFactory factory = new DefaultJmsListenerContainerFactory();
        // This provides all boot's default to this factory, including the message converter
        configurer.configure(factory, connectionFactory);
        // You could still override some of Boot's default if necessary.

        //enable topic mode
        factory.setPubSubDomain(true);
        return factory;
    }

    public static void main(String[] args) {
        SpringApplication.run(App.class, args);
    }
}
```

Explanation (see more detailed information here [messaging-jms](https://spring.io/guides/gs/messaging-jms/))

```java
@EnableJms
```
* Triggers the discovery of methods annotated with ```@JmsListener```, creating the message listener container under the covers.

```java
@Bean
    public JmsListenerContainerFactory< ? > connectionFactory(
                        ConnectionFactory connectionFactory,
                        DefaultJmsListenerContainerFactoryConfigurer configurer) {
        DefaultJmsListenerContainerFactory factory = new  DefaultJmsListenerContainerFactory();

    ...

```
* Specify the default container factory to use by the JMSListener to convert received message to the targeted Object, this part must be also apply on MsgEmitter if we want to send java Object


```java
factory.setPubSubDomain(true)
```

* Default bus communication is queue. this line enable topic default communication mode

### 4 Set the Bus listener

Create the **BusListener** file in the package **comm.controller** as follow:
```java

package com.cpe.springboot.msgreceiver.comm.controller;

import ...

@Component
public class BusListener {

    @Autowired
    JmsTemplate jmsTemplate;

    @JmsListener(destination = "RESULT_BUS_MNG", containerFactory = "connectionFactory")
    public void receiveMessage(String msgStr, Message message) {

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

```

Explanation

```java
@Component
public class BusListener
```
* Define the current Class as a component that could be injected. These classes are eligible for auto-detection through classpath scanning (detected by @ComponentScan).

```java
    @Autowired
    JmsTemplate jmsTemplate;
```
* Inject the dependence JmsTemplate used by the project. This object could be used as soon as application server create an instance of it (linked to activemq dependency)
  
```java
@JmsListener(destination = "A", containerFactory = "connectionFactory")
    public void receiveMessageA(String msgStr, Message message) {
        ...
    }
```
* Define a listener on the Bus channel "A", received message user the **connectionFactory** defined in the **App** to convert received message into targeted format (here String). **@JmsListener** is discovered because the **@EnableJms** is set.

### 5 Update application.properties
- Create the `application.properties` into `./src/main/resources/` as follow if the file does not exist:
```
server.address=127.0.0.1
server.port=8083
spring.activemq.broker-url=tcp://localhost:61616
spring.activemq.user=admin
spring.activemq.password=admin
spring.activemq.packages.trust-all=true
spring.activemq.non-blocking-redelivery= true
```

### 6 Compile and check behavior
* Compile your project and start it
* Start your local activeMq communication Bus (see installation instructions [here](https://activemq.apache.org/getting-started#InstallationProcedureforUnix) )

```
cd [activemq_install_dir]/bin
./activemq start
```

- Open the activemq web console at **localhost:8161** and look at the topics section
- Select the row of one of the 3 bus channel "RESULT_BUS_MNG", "A", "B". click on the **Send TO** link 
- Add a Message body and check if the log message appears on the MsgReceiver server side

### 7 Test end to end behavior
- Start activeMq server (if not already started)
- Run MsgEmitter project (e.g on port 8082)
- Run MsgReceiver project (e.g on port 8083)
- Send a message to your SpringBoot application (e.g [postman](https://www.getpostman.com/)) with the following parameters:
  - HTTP METHOD: ```POST```
  - URL:         ```localhost:8082/sendmsg```  
  - Body: ``` message 1 from MsgEmitter```
- check that the message is logged on the MsgReceiver side on the bus channel "RESULT_BUS_MNG"

```
[BUSLISTENER] [CHANNEL RESULT_BUS_MNG] RECEIVED String MSG=[message 1 from MsgEmitter]
```
