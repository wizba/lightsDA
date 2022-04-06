import { Component, OnInit } from '@angular/core';
import { ModalController, ToastController } from "@ionic/angular";

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.page.html',
  styleUrls: ['./settings-page.page.scss'],
})
export class SettingsPagePage implements OnInit {

  push: boolean = localStorage.getItem('push') === 'true' ? true : false;
  vibrate: boolean = localStorage.getItem('vibrate') === 'true' ? true : false;

  constructor(public modalController: ModalController) { }

  ngOnInit() { }

  dismiss() {
    this.modalController.dismiss();
  }


  changePush () { 
    localStorage.setItem('push', JSON.stringify(this.push));
  }

  changeVibrate () { 
    localStorage.setItem('vibrate', JSON.stringify(this.vibrate));
  }

}
