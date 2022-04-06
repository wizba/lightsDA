
package com.light.light.Models;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import javax.persistence.*;
import java.util.Set;


@Entity
@Table(name="tbl_component")
//organising json output in order
@JsonPropertyOrder({ "componentId", "componentName", "action","pin"})

public class Component
{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "component_id")
    private int componentId;
    @Column(name = "component_name")
    private String ComponentName;
    @Column(name = "user_id")
    private int userId;
    @Column(name ="pin_number")
    private int pin_number;
    @Column(name ="color")
    private String color;

    //joining component with Notification
    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "component_id", referencedColumnName = "component_id")
    private Set<com.light.light.Models.Notification> Notification;

    //joining component with Schedule

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "component_id", referencedColumnName = "component_id")
    private Set<Schedule> schedule;

    public Component() {
    }

    public Component(int componentId, String componentName, int userId, int pin, Set<com.light.light.Models.Notification> notification, Set<Schedule> schedule) {
        this.componentId = componentId;
        ComponentName = componentName;
        this.userId = userId;
        this.pin_number = pin;
        Notification = notification;
        this.schedule = schedule;
    }

    public int getPin() {
        return pin_number;
    }

    public void setPin(int pin) {
        this.pin_number = pin;
    }

    public int getComponentId() {
        return componentId;
    }

    public void setComponentId(int componentId) {
        this.componentId = componentId;
    }

    public String getComponentName() {
        return ComponentName;
    }

    public void setComponentName(String componentName) {
        ComponentName = componentName;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public Set<com.light.light.Models.Notification> getAction() {
        return Notification;
    }

    public void setAction(Set<com.light.light.Models.Notification> action) {
        Notification = action;
    }

    public Set<Schedule> getSchedule() {
        return schedule;
    }

    public void setSchedule(Set<Schedule> schedule) {
        this.schedule = schedule;
    }

    @Override
    public String toString() {
        return "Component{" +
                "componentId=" + componentId +
                ", ComponentName='" + ComponentName + '\'' +
                ", userId=" + userId +
                ", pin=" + pin_number +
                ", Notification=" + Notification +
                ", schedule=" + schedule +
                '}';
    }
}