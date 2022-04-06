import { OnInit } from '@angular/core';
import { Component, AfterViewInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import * as _ from 'lodash';
import { Device } from '../shared/models/device';
import { DeviceService } from '../shared/services/device.service';
import { AddDevicePage } from '../add-device/add-device.page';
import { SettingsPagePage } from '../settings-page/settings-page.page';
import { NavigateService } from '../shared/services/navigate.service';
import { SettingsModalService } from '../shared/services/settings-modal.service';
import { NotificationService } from '../shared/services/notification.service';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { ToastService } from '../shared/services/toast.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements AfterViewInit, OnInit {
  

  constructor(
    public alertController: AlertController,
    public modalController: ModalController,
    public deviceService: DeviceService,
    public navigate: NavigateService,
    public settingsService: SettingsModalService,
    private notificationService: NotificationService,
    private toastService: ToastService) { }

  ngOnInit(): void {
    this.deviceService.selectSlot();
  }



  // This method is meant to display the add device modal
  async presentModal() {

    const devices: any[] = localStorage.getItem('component') ? (JSON.parse(localStorage.getItem('component'))) : [];

    if (devices.length < 9) {
      const modal = await this.modalController.create({
        component: AddDevicePage
      });

      await modal.present();
    } else {
      this.toastService.presentToast('Not slot available for your new device', 2);
    }
  }

  // This method is meant to display the settings modal
  showSettings() {
    // The method to present the modal will be called from the service settings-modal.service.ts
    this.settingsService.showSettingsPage();
    //this.notificationService.localPush(1, 'Urgency', 'Someone is at ur doors', 5);
  }

  setComponent(device: Device, i: number): void {
    this.deviceService.selectedComponent = device;
    this.deviceService.selectedComponentIndex = i;
  }

  ngAfterViewInit(): void {

    document.querySelectorAll('#btnAddDevice').forEach(data => {
      data.classList.remove('pulse');
      data.classList.add('fadeInUp');
    });
  
    setTimeout(() => { 
      document.querySelector('#btnAddDevice').classList.remove('fadeInUp');
      document.querySelector('#btnAddDevice').classList.add('pulse');
     }, 3000);
  }

}


