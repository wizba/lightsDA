package com.light.light.Models;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import org.hibernate.annotations.Cascade;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "tbl_user")
@JsonPropertyOrder({ "userId", "email", "component" })

public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int userId;

    @Column(name = "email")
    private String email;

    public User(int userId, String Email)
    {
        this.userId = userId;
        this.email = Email;
    }
    public User() {

    }
    public void setUserId(int userId) {
        this.userId = userId;
    }
    public void setEmail(String Email) {
        this.email = Email;
    }
    public void setComponent(Set<Component> component) {
        this.component = component;
    }

    public int getUserId() {
        return userId;
    }
    public String getEmail() {
        return email;
    }

    //creating a one to many connection between user and component Tables
    @OneToMany()
    //any changes happens on the User must cascade to its  related entities  as well.
    @Cascade(org.hibernate.annotations.CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    private Set<Component> component;
    public Set<Component> getComponent()
    {
        return component;
    }

    @Override
    public String toString() {
        return "User [userId=" + userId + ", Email=" + email + ", component=" + component + "]";
    }


}