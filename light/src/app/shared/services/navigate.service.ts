import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { NavController } from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(private navCtrl: NavController) { }
  
  goTo(state: string, direction: string) { 
    //this.router.navigate([state]);
    //return this.navCtrl.navigateRoot('/tabs');
    if (direction === 'forward') { 
      console.log(direction);
      return this.navCtrl.navigateForward(state);
    }

    return this.navCtrl.navigateBack(state); 
  }

}
