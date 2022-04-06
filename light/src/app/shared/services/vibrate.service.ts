import { Injectable } from '@angular/core';
import { Vibration } from '@ionic-native/vibration/ngx';

@Injectable({
  providedIn: 'root'
})
export class VibrateService {

  constructor(public vibration: Vibration) { }

  vibrateDevice(timer1: number = 1, timer2: number = 1, timer3: number = 1): void {

    const time1 = timer1 * 1000, time2 = timer2 * 1000, time3 = timer3 * 1000;

    const vibrate: boolean = localStorage.getItem('vibrate') === 'true' ? true : false;

    // check if vibrate is set to true
    if (vibrate) {

      // Vibrate the device for timer1 second
      if (arguments.length === 1) {
        this.vibration.vibrate(time1);
        return;
      }

      // Vibrate timer1 seconds, Pause for timer2 second, Vibrate for timer3 seconds
      if (arguments.length === 3) {
        this.vibration.vibrate([time1, time2, time3]);
        return;
      }

      // Stop any current vibrations immediately
      this.vibration.vibrate(0);
      
    }
  }

}
