package com.light.light.Models;


import javax.persistence.*;

@Entity
@Table(name="tbl_schedule")
public class Schedule
{

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "schedule_id")
    private Integer schedule_id;
    @Column(name="component_id")
    private Integer component_id;
    @Column(name="start_time")
    private java.sql.Timestamp  start_time;
    @Column(name ="end_time")
    private java.sql.Timestamp  end_time;

    public Schedule() {
    }

    public Schedule(Integer schedule_id, Integer component_id, java.sql.Timestamp  start_time, java.sql.Timestamp  end_time) {
        this.schedule_id = schedule_id;
        this.component_id = component_id;
        this.start_time = start_time;
        this.end_time = end_time;
    }
//schedule method
    public Integer getSchedule_id() {
        return schedule_id;
    }

    public void setSchedule_id(Integer schedule_id) {
        this.schedule_id = schedule_id;
    }

    public Integer getComponent_id() {
        return component_id;
    }

    public void setComponent_id(Integer component_id) {
        this.component_id = component_id;
    }

    public java.sql.Timestamp  getStart_time() {
        return start_time;
    }

    public void setStart_time(java.sql.Timestamp  start_time) {
        this.start_time = start_time;
    }

    public java.sql.Timestamp  getEnd_time() {
        return end_time;
    }

    public void setEnd_time(java.sql.Timestamp  end_time) {
        this.end_time = end_time;
    }

    @Override
    public String toString() {
        return "Schedule{" +
                "schedule_id=" + schedule_id +
                ", component_id=" + component_id +
                ", start_time=" + start_time +
                ", end_time=" + end_time +
                '}';
    }
}