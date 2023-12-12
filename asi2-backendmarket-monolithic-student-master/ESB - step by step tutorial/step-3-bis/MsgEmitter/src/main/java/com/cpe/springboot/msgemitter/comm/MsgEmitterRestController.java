package com.cpe.springboot.msgemitter.comm;

import com.cpe.springboot.model.Poney;
import com.cpe.springboot.msgemitter.comm.controller.BusService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class MsgEmitterRestController {

    @Autowired
    BusService busService;

    @RequestMapping(method = RequestMethod.POST, value = "/sendmsg")
    public boolean sendInform(@RequestBody Poney msg) {
        busService.sendMsg(msg);
        return true;
    }

    @RequestMapping(method = RequestMethod.POST, value = "/sendmsg/{busName}")
    public boolean sendInform(@RequestBody Poney msg, @PathVariable String busName) {
        busService.sendMsg(msg,busName);
        return true;
    }

}
