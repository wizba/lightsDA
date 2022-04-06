import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }
  
  async presentToast(message: string, time: number) {
    const timer = time * 1000;
    const toast = await this.toastController.create({
      message: message,
      duration: timer
    });
    toast.present();
  }
}
