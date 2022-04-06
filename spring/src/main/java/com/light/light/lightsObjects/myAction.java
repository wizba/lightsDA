package com.light.light.lightsObjects;

import com.light.light.Models.Notification;

import java.util.Optional;

//helps to wrap action into an object
public class myAction
{
    Optional<Notification> data;

    public myAction() {
    }

    public myAction(Optional<Notification> data) {
        this.data = data;
    }

    public Optional<Notification> getData() {
        return data;
    }

    public void setData(Optional<Notification> data) {
        this.data = data;
    }
}
