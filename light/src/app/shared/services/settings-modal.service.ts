import { Injectable } from '@angular/core';
import { SettingsPagePage } from '../../settings-page/settings-page.page';
import { ModalController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class SettingsModalService {

  constructor(public modalController: ModalController) { }

  async showSettingsPage() {
    const settingsModal = await this.modalController.create({
      component: SettingsPagePage
    });
    await settingsModal.present();
  }
}
