package com.light.light.Controller;

import com.light.light.ErrorHandling.UserNotFound;
import com.light.light.Models.Notification;
import com.light.light.Repositories.ComponentRepository;
import com.light.light.Repositories.notificationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
//allowing cross platform
@CrossOrigin( origins = "*" )
@RequestMapping("/notification")
public class NotificationController
{
    @Autowired
    notificationRepository notRepo;
    @Autowired
    private ComponentRepository comp;

    @PostMapping("/{Compid}")
    public ResponseEntity notify(@RequestBody Notification n,@PathVariable Integer Compid)
    {
        if(! comp.findById(Compid).isPresent())
        {
            return  new ResponseEntity(HttpStatus.NOT_FOUND);
        }
        n.setComponentId(Compid);
        notRepo.save(n);

        return  new ResponseEntity(HttpStatus.OK);
    }

    @PutMapping("/{n_id}")
    public void updateSchedule(@PathVariable Integer n_id,@RequestBody Notification note)
    {
        Optional<Notification> n= notRepo.findById(n_id);

        if(n.isPresent()) {
            throw new UserNotFound("notification  :" + n_id + " does not exist");
        }
        n.map(notifi->{

            note.setNotificationId(n_id);
            notRepo.save(note);

            return notifi;
        });
    }
    @GetMapping("/All")
    public List<Notification> getAll()
    {
        return notRepo.findAll();
    }


}
