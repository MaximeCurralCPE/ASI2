package com.cpe.springboot.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.cpe.springboot.card.Controller.BusService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;

@RestController
public class UserMsgEmitterRestController {
    
    @Autowired
    BusService busService;

    @RequestMapping(method = RequestMethod.POST, value = "/user")
    public boolean sendInformation(@RequestBody String msg) {
        System.out.println("[MsgEmitterRestController] sending ["+msg+"]");
        busService.sendmsg(msg);
        return true;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/user/{busName}")
    public boolean sendInformation(@RequestBody String msg, @PathVariable String busName) {
        System.out.println("[MsgEmitterRestController] sending ["+msg+"] to ["+busName+"]");
        busService.sendmsg(msg, busName);
        return true;
    }

}
