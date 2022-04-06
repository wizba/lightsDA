

package com.light.light.Models;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name="tbl_notification")

@JsonPropertyOrder({ "notificationId", "id", "actionTime,message,action" })
public class Notification  {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="notificationId")
    private int notificationId;


    @Column(name="mesage")
    private String message;
    @Column(name="action")
    private boolean action;
    @Column(name="notification_time")
    private Date actionTime;
    @Column(name = "component_id")
    private int ComponentId;


    public Notification() {

    }

    public Notification(int actionId, boolean action, Date actionTime, int id) {
        notificationId = actionId;
        this.action = action;
        this.actionTime = actionTime;
        ComponentId = id;
    }

    public int getNotificationId() {
        return notificationId;
    }

    public void setNotificationId(int notificationId) {
        this.notificationId = notificationId;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isAction() {
        return action;
    }

    public void setAction(boolean action) {
        this.action = action;
    }

    public Date getActionTime()
    {
        return actionTime;
    }

    public void setActionTime(Date actionTime)
    {
        this.actionTime = actionTime;
    }

    public int getComponentId()
    {
        return ComponentId;
    }

    public void setComponentId(int id)
    {
        ComponentId = id;
    }


    public boolean getAction()
    {
        return this.action;
    }

    @Override
    public String toString() {
        return "Notification{" +
                "notificationId=" + notificationId +
                ", message='" + message + '\'' +
                ", action=" + action +
                ", actionTime=" + actionTime +
                ", ComponentId=" + ComponentId +
                '}';
    }
}