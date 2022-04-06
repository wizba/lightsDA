package com.light.light.Controller;

import com.light.light.ErrorHandling.UserNotFound;
import com.light.light.Models.Schedule;
import com.light.light.Repositories.ComponentRepository;
import com.light.light.Repositories.ScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
//allowing cross platform
@CrossOrigin( origins = "*" )
@RequestMapping("/Schedule")
public class ScheduleController
{
    @Autowired
    private ScheduleRepository scheduleRepo;
    @Autowired
    private ComponentRepository comp;

    //setting a schedule
    @PostMapping("/component/{id}")
    public void setSchedule(@RequestBody Schedule schedule,@PathVariable Integer id)
    {
        if(! comp.findById(id).isPresent()) {
            throw new UserNotFound("component  id :" + id + " does not exist");
        }
        schedule.setComponent_id(id);

        scheduleRepo.save(schedule);
    }

    //get all the existing schedules
    @GetMapping("/All")
    public List<Schedule>  getAllSchedules()
    {
        return scheduleRepo.findAll();
    }

    //updating an existing schedule
    @PutMapping("/{scheduleID}")
    public void updateSchedule(@PathVariable Integer scheduleID,@RequestBody Schedule schedule)
    {
        Optional<Schedule> sc= scheduleRepo.findById(scheduleID);

        if(sc.isPresent()) {
            throw new UserNotFound("schedule id :" + scheduleID + " does not exist");
        }
        sc.map(s->{

            s.setStart_time(schedule.getStart_time());
            s.setEnd_time(schedule.getEnd_time());

            return s;
        });
    }

    //deleting an existing schedule
    @DeleteMapping("/{id}")
    public void deleteSchedule(@PathVariable Integer id)
    {
        Optional<Schedule> sc= scheduleRepo.findById(id);

        if(sc.isPresent()) {
            throw new UserNotFound("schedule id :" + id + " does not exist");
        }
        scheduleRepo.deleteById(id);
    }

}
