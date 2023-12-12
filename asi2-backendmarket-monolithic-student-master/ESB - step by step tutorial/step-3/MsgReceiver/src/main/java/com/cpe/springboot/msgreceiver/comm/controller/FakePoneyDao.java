package com.cpe.springboot.msgreceiver.comm.controller;

import com.cpe.springboot.model.Poney;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class FakePoneyDao {
    private List<Poney> poneyList;

    public FakePoneyDao(){
        this.poneyList=new ArrayList<>();
    }

    public void addPoney(Poney poney){
        this.poneyList.add(poney);
    }

    public List<Poney> getAllPoney(){
        return this.poneyList;
    }
}
