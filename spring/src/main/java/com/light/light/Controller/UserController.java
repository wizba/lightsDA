package com.light.light.Controller;

import com.light.light.Models.User;
import com.light.light.Repositories.UserRepository;
import com.light.light.Validation.Validate;
import com.light.light.lightsObjects.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
//allowing cross platform
@CrossOrigin( origins = "*" )
@RequestMapping("/users")
public class UserController
{
    @Autowired
    UserRepository userRepo;

    //adding a new user
    @PostMapping("/new")
    public ResponseEntity<User>  StoreUserInfo(@RequestBody User u)
    {

        //calls the email validation class
        if(!Validate.emailValid( u.getEmail() ))
        {
           return  new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        userRepo.save(u);
        return  new ResponseEntity(HttpStatus.OK);
    }


    @GetMapping("/{email}")
    public ResponseEntity<User> findByEmail(@PathVariable String email)
    {
        List<User> user=userRepo.findByEmail(email);

        ResponseEntity<User> body=null;
        if(!user.isEmpty())
        {
            body=new ResponseEntity(user,HttpStatus.OK);
        }else
        {
            body=new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        //calls the email validation class
        if(!Validate.emailValid(email))
        {
            return  new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        return body;
    }

    //get user by id
    @GetMapping("/user/{userId}")
    public ResponseEntity<User> getById(@PathVariable int userId)
    {


        Optional<User> usersById=userRepo.findById(userId);

    //returning a resposne status using java 8
       return usersById.map(user -> ResponseEntity.ok().body(user))
               .orElseGet(() -> ResponseEntity.notFound().build());

    }



    //get all users
    @GetMapping()
    public ResponseEntity getAll()
    {
        //ensures that and api returns an object
        Data user=new Data();

        user.setData(userRepo.findAll());
        return new ResponseEntity(user,HttpStatus.OK);
    }

    //Updating user details
    @PutMapping("/user/{userId}/{email}")
    public ResponseEntity UpdateUser(@PathVariable Integer userId,@PathVariable String email)
    {

            Optional<User> user = userRepo.findById(userId);
        //checking if user is present
        if(!user.isPresent() && email.isEmpty())
        {
            return  new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        //validating email
        if( !Validate.emailValid(email) )
        {
            return  new ResponseEntity(HttpStatus.BAD_REQUEST);
        }

        //updating
            user.map((u) -> {
                u.setUserId(userId);
                u.setEmail(email);
                if (!u.toString().isEmpty())
                {
                    userRepo.save(u);
                }

                return u;
            });

        return new ResponseEntity(HttpStatus.OK);
    }

}
