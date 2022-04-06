import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import * as _ from 'lodash';
import { SettingsModalService } from '../shared/services/settings-modal.service';
import { NotificationService } from '../shared/services/notification.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements AfterViewInit {


  notifications = 'Triggers';
  @ViewChild('notificationRef') notificationRef: ElementRef;
  notList = document.querySelector('.notification-card');

  trigeredDivices = this.notificationService.notification;

  constructor(
    public alertController: AlertController,
    public settingsService: SettingsModalService,
    public notificationService: NotificationService) { }

  ngOnInit(): void {
    // console.log(this.notificationRef);
    // console.log(document.querySelectorAll('#notList'));
  }

  showSettings() {
    // The method to present the modal will be called from the service settings-modal.service.ts
    this.settingsService.showSettingsPage();
  }

  ngAfterViewInit() {
    // console.log('this.notificationRef');

    const count = 1000 * document.querySelectorAll('#notList').length;
    setTimeout(() => {
      document.querySelectorAll('#notList').forEach((data) => {
        // data.classList.remove('animated');
      });
    }, count);
  }
  
  deleteNotification(data) {
    console.log(data);
    this.notificationService.removeNotofication(data);
  }

}
