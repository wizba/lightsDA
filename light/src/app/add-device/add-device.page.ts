import { Component, OnInit } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";
import { DeviceService } from "../shared/services/device.service";
import { Device } from "../shared/models/device";
import { ToastService } from "../shared/services/toast.service";
import { NavigateService } from "../shared/services/navigate.service";

import { VibrateService } from "../shared/services/vibrate.service";

@Component({
  selector: "app-add-device",
  templateUrl: "./add-device.page.html",
  styleUrls: ["./add-device.page.scss"]
})
export class AddDevicePage implements OnInit {
  color: string[] = ["blockOne", "blockTwo", "blockThree"];

  newDevice: Device = {
    name: "",
    pin: 0,
    action: false,
    color: ""
  };

  componentStorage: Device[] = [];

  constructor(
    public modalController: ModalController,
    public toastController: ToastController,
    public deviceService: DeviceService,
    public toastService: ToastService,
    private vibrateService: VibrateService
  ) {}

  ngOnInit() {

    if (localStorage.getItem('component')) { 
      this.componentStorage = JSON.parse(localStorage.getItem('component'));
    }
  }

  dismiss() {
    this.modalController.dismiss();
  }

  addDevice() {
    if (this.newDevice.pin == 0 || this.newDevice.name.length == 0) {
      this.toastService.presentToast("All fields required...", 2);
      return;
    }

    if (this.newDevice.name.length > 17) {
      this.toastService.presentToast(
        "Maximum 17 characters allowed in device's name",
        2
      );
      return;
    }

    this.newDevice.color = this.color[Math.floor(Math.random() * 3)];
    this.newDevice.pin = +this.newDevice.pin;

    this.deviceService.components.push(this.newDevice);
    
    // set or add new item to the storage
    localStorage.setItem('component', JSON.stringify(this.deviceService.components));
   
    this.deviceService.selectSlot();

    // vibrate 1 second
    this.vibrateService.vibrateDevice(1);

    let message = `${this.newDevice.name} added successfully`;
    this.toastService.presentToast(message, 2);
    this.dismiss();
  }

  cancel() {
    this.dismiss();
  }
}
