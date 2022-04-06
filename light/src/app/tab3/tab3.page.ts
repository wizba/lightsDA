import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { SettingsModalService } from '../shared/services/settings-modal.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor(public settingsService: SettingsModalService) {}

  ngOnInit() {
  }

  showSettings() {
    // The method to present the modal will be called from the service settings-modal.service.ts
    this.settingsService.showSettingsPage();
  }

}
