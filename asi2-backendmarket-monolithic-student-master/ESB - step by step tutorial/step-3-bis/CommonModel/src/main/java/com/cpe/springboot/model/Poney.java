package com.cpe.springboot.model;

import java.io.Serializable;

//need to be set as Serializable in order to be acceptable by the communication BUS
public class Poney  implements Serializable {
    //need to set serialVersionUID otherwise emitter and receiver compute their own serialVersionUID that could be different
    private static final long serialVersionUID = 1069270118228032176L;

    private String name;
    private String description;
    private String super_power;
    private Integer velocity;
    private Integer energy;

    public Poney() {
    }

    public Poney(String name, String description, String super_power, Integer velocity, Integer energy) {
        this.name = name;
        this.description = description;
        this.super_power = super_power;
        this.velocity = velocity;
        this.energy = energy;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSuper_power() {
        return super_power;
    }

    public void setSuper_power(String super_power) {
        this.super_power = super_power;
    }

    public Integer getVelocity() {
        return velocity;
    }

    public void setVelocity(Integer velocity) {
        this.velocity = velocity;
    }

    public Integer getEnergy() {
        return energy;
    }

    public void setEnergy(Integer energy) {
        this.energy = energy;
    }


    @Override
    public String toString() {
        return display();
    }

    public String display(){
        String result;
        result="["+getName()+"],\n\t description: \n \t\t"+getDescription()+"\n\t"+
                                 "super_power: \n\t\t"+getSuper_power()+"\n\t"+
                                 "velocity: \n\t\t"+getVelocity()+"\n\t"+
                                 "energy: \n\t\t"+getEnergy()+"\n\t";

        return result;
    }
}
