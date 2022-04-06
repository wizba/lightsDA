import { Component, OnInit } from '@angular/core';
import { NavigateService } from '../shared/services/navigate.service';
import { DeviceService } from '../shared/services/device.service';
import { ToastService } from '../shared/services/toast.service';
import { AlertController } from '@ionic/angular';
import * as _ from 'lodash';

@Component({
  selector: 'app-device-config',
  templateUrl: './device-config.page.html',
  styleUrls: ['./device-config.page.scss'],
})
export class DeviceConfigPage implements OnInit {

  showSetting: boolean = false;
  showSchedule: boolean = false;

  date = new Date();
  minDate: any;
  maxDate: any;
  //currentDate = `${this.date.getFullYear()}-${this.date.getMonth()}-${this.date.getDate()}`;

  constructor(public navigate: NavigateService,
    public deviceService: DeviceService,
    public toast: ToastService,
    public alert: AlertController) {

      this.getSysDateTime();
      
     }

  ngOnInit() {
    if (this.deviceService.selectedComponent.name.length == 0) {
      this.navigate.goTo('tabs/tab1', 'kjhgf');
    }
   
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.minDate = yyyy + '-' + mm + '-' + dd ;

    this.maxDate = String( +yyyy + 2) + '-' + mm;
      
  }

  showSlotConfig: boolean = false;

  showSettings() {
    this.showSlotConfig = (this.deviceService.slots.filter(data => data.status == false)).length == 0 ? true : false;
    if ((this.deviceService.slots.filter(data => data.status == false)).length == 0) { 
      this.toast.presentToast('No slot available, you might remove a device to free your slot', 4);
    }
    this.showSetting = !this.showSetting;
  }

  removeDevice() {

    this.deviceService.selectedComponent.action = false;
    this.deviceService.trigger();

    this.deviceService.components = this.deviceService.components.filter(device => {
      return device !== this.deviceService.selectedComponent;
    });

    this.deviceService.slots.map(data => {
      if (data.pin == this.deviceService.selectedComponent.pin) {
        data.status = false;
      }
    });

    

    localStorage.setItem('component', JSON.stringify(this.deviceService.components));


    

    this.navigate.goTo('/tabs/tab1', 'backward');
    let message = `${this.deviceService.selectedComponent.name} successfully removed`;
    this.toast.presentToast(message, 1);

    console.log(this.deviceService.components);
  }

  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Confirm!',
      message: 'Are You Sure You Want To Remove This Device?',
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            // console.log('Confirm Cancel');
          }
        }, {
          text: 'Remove',
          handler: () => {
            // console.log('Confirm Okay');
            this.removeDevice();
          }
        }
      ]
    });

    await alert.present();
  }

  changeSlot() {
    this.deviceService.selectSlot();
  }

  // Scedule test added by Teboho
  startDateTime: string;
  endDateTime: string;
  sysDateTime: string;

  start = new Date(this.startDateTime);



  getSysDateTime() {
    setInterval(() => {
      const currentdateTime = new Date().toString();
      const start = new Date(this.startDateTime).toString();
      const end = new Date(this.endDateTime).toString();

      if (currentdateTime === start && this.startDateTime !== undefined && this.showSchedule === true) {
        this.deviceService.selectedComponent.action = true;
        this.deviceService.trigger();
      }

      if (currentdateTime === end && this.startDateTime !== undefined) {
        this.deviceService.selectedComponent.action = false;
        this.deviceService.trigger();
      }
      //this.sysDateTime = currentdateTime;
      //this.sysDateTime = currentdateTime.toDateString() + ' ' + currentdateTime.toLocaleTimeString();

    } , 1000);
  }

}
