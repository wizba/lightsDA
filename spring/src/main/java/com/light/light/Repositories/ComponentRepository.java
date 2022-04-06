package com.light.light.Repositories;

import com.light.light.Models.Component;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ComponentRepository extends JpaRepository<Component,Integer>
{
    List<Component> findByUserId(int userId);
}
