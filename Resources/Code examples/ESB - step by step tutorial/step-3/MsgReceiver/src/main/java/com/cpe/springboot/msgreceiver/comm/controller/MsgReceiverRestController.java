package com.cpe.springboot.msgreceiver.comm.controller;

import com.cpe.springboot.model.Poney;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MsgReceiverRestController {

    @Autowired
    FakePoneyDao poneyDao;

    @RequestMapping(method = RequestMethod.GET, value = "/poneys")
    public List<Poney> sendInform() {
        return poneyDao.getAllPoney();
    }
}
