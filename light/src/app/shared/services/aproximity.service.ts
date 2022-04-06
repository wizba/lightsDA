import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from './notification.service';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class AproximityService {

  // localhost rabota pc
  url: string = environment.url + '/device/alert';


  constructor(public http: HttpClient, private notificationService: NotificationService) { }



  checkPoximity() {
    this.http.get(this.url).subscribe(data => {
      console.log(data);

      if (Boolean(data)) {
        this.notificationService.localPush(1, 'Proximity sensor', 'Alert! we detected someone is at your front gate', 1);
      }
    });
  }

}
