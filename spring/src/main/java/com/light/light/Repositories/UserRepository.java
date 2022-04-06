package com.light.light.Repositories;

import com.light.light.Models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UserRepository extends JpaRepository<User,Integer>
{
 public List<User> findByEmail(String email);
}
