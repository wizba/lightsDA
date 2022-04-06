package com.light.light.Controller;

import com.light.light.ErrorHandling.UserNotFound;
import com.light.light.Models.Component;
import com.light.light.Repositories.ComponentRepository;
import com.light.light.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
//allowing cross platform
@CrossOrigin( origins = "*" )
@RequestMapping("/component")
public class ComponentController
{
    @Autowired
    ComponentRepository compRepo;

    @Autowired
    UserRepository userRepo;

    //adding a new component
    @PostMapping("/user/{id}")
   public ResponseEntity SaveComponentInfo(@RequestBody Component component, @PathVariable Integer id)
    {

        if(userRepo.findById(id).isPresent() && !(component.getComponentName()==null || component.getComponentName().isEmpty()) )
        {
            component.setUserId(id);
            compRepo.save(component);

            return  new ResponseEntity(HttpStatus.OK);
        }
        else
        {
            //bad request returned due bad syntax
            //put in an invalid id
            return  new ResponseEntity(HttpStatus.NOT_FOUND);
        }

    }
    @GetMapping("/user/{id}")
    public ResponseEntity getCompByUserID(@PathVariable Integer id)
    {
        if(userRepo.findById(id).isPresent())
        {
            return new ResponseEntity(compRepo.findByUserId(id),HttpStatus.OK);
        }else
        {
            return  new ResponseEntity(HttpStatus.NOT_FOUND);
        }
    }
    //deleting component
    @DeleteMapping("/component/{id}")
    public ResponseEntity deleteComponent(@PathVariable Integer id)
    {
        if(!compRepo.findById(id).isPresent())
        {
            return  new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        compRepo.deleteById(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    //updating a component  ---working
    @PutMapping("/id/{id}/name/{name}/pin/{pin}")
    public void UpdateUser(@PathVariable Integer id,@PathVariable String name,@PathVariable int pin)
    {
        if(!compRepo.findById(id).isPresent())
            throw new UserNotFound("component  id :" + id + " does not exist");

        Optional<Component> component=compRepo.findById(id);

        component.map(c-> {
            c.setUserId(c.getUserId());
            c.setComponentId(c.getComponentId());
            c.setComponentName(name);
            c.setPin(pin);
            if(!c.toString().isEmpty())
            {
                compRepo.save(c);
            }

            return c;
        });

    }
    //get all components
    @GetMapping("/all")
    public List<Component> getAll()
    {
        return compRepo.findAll();
    }
}
