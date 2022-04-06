import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';
import { HttpClient } from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  notification: any[] = localStorage.getItem('notification') ? (JSON.parse(localStorage.getItem('notification'))) : [];
   

  constructor(private localNotifications: LocalNotifications,private http: HttpClient) { }


  localPush(id: number, title: string, text: string, second: number) {

    const notification = {
      title,
      text,
      time: moment().format('YYYY-MM-DD HH:mm')
    };

    const push: boolean = localStorage.getItem('push') === 'true' ? true : false;
    const time = second * 1000;
    console.log('notify');

    if (push) {
      this.addNotification(notification);
      this.localNotifications.schedule({ id, title, text, trigger: { at: new Date(new Date().getTime() + time) }, });

      //push to database
      this.http.post('http://localhost:8080/notification/1',{
        "action":"false",
        "actionTime":new Date(new Date().getTime() + time),
        "message":text
      }).subscribe(note => {console.log(note);});
      //push to database

    }

  }


  addNotification (data: any) {
    this.notification.push(data);
    localStorage.setItem('notification', JSON.stringify(this.notification));
  }

  removeNotofication (index: number) {
    this.notification.splice(index, 1);
    console.log(this.notification);
    localStorage.setItem('notification', JSON.stringify(this.notification));
  }

}
