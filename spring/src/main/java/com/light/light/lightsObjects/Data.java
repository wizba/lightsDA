package com.light.light.lightsObjects;

import com.light.light.Models.User;

import java.io.Serializable;
import java.util.List;

//helps the api return an object instead of list
public class Data implements Serializable
{
    List<User> data;

    public Data() {
    }

    public Data(List<User> data) {
        this.data = data;
    }

    public List<User> getData() {
        return data;
    }

    public void setData(List<User> data) {
        this.data = data;
    }
}
