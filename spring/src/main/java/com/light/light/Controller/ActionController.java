package com.light.light.Controller;


import com.light.light.Models.Notification;
import com.light.light.Repositories.notificationRepository;
import com.light.light.lightsObjects.myAction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
//allowing cross platform connection
@CrossOrigin( origins = "*" )
@RequestMapping("/notification")
public class ActionController
{


    @Autowired
    notificationRepository actionRepo;

    //get all actions
    @GetMapping()
    public List<Notification> getAll()
    {
        return actionRepo.findAll();
    }
    //create new action
    @PostMapping("/component/{compId}")
    public ResponseEntity StoreUserInfo(@RequestBody Notification action, @PathVariable Integer compId)
    {
        if( compId == null || compId == 0 )
            return new ResponseEntity(HttpStatus.BAD_REQUEST);

        action.setComponentId(compId);
        actionRepo.save(action);

        return new ResponseEntity(HttpStatus.OK);
    }

    //update action
    @PutMapping("{nId}/component/{compId}/description/{desc}")
    public ResponseEntity updateComponent(@PathVariable int nId, @RequestBody Notification A, @PathVariable Integer compId)
    {
        Optional<Notification> action=actionRepo.findById(nId);

        if( !action.isPresent() )
            return new ResponseEntity(HttpStatus.BAD_REQUEST);

        action.map(a->{
            a.setComponentId(compId);
            a.setAction(A.getAction());


            if(!a.toString().isEmpty())
            {
                actionRepo.save(a);
            }

            return a;
        });
            return new ResponseEntity(new myAction(action),HttpStatus.OK);

    }

    //deleting an action by id
    @DeleteMapping("{id}/component")
    public ResponseEntity deleteComponent(@PathVariable Integer id)
    {
        if(!actionRepo.findById(id).isPresent())
        {
            return  new ResponseEntity(HttpStatus.NOT_FOUND);
        }

        actionRepo.deleteById(id);
        return new ResponseEntity(HttpStatus.OK);
    }

    @DeleteMapping("/all")
    public void deleteAll()
    {
        actionRepo.deleteAll();
    }


}
