import { Injectable } from '@angular/core';
import { Device } from '../models/device';
import { Schedule } from '../models/schedule';
import { BoardService } from './board.service';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  constructor(public board: BoardService) {

    if (this.checkStorage('component')) {
      this.components = JSON.parse(localStorage.getItem('component'));
    }
  }

  // all added devices
  components: Device[] = [];
  // available arduino slot
  slots: Array<{ pin: number, status: boolean }> = [
    { pin: 2, status: false }, { pin: 3, status: false },
    { pin: 4, status: false }, { pin: 5, status: false },
    { pin: 6, status: false }, { pin: 7, status: false },
    { pin: 8, status: false }, { pin: 9, status: false },
    { pin: 10, status: false }
  ];

  // selected device
  selectedComponent: Device = { name: '', pin: 0, action: false, color: '' };

  selectedComponentIndex: number;

  // show or hide a specicific slot
  selectSlot() {

    this.changeSlot();

    // tslint:disable: prefer-for-of
    for (let s = 0; s < this.slots.length; s++) {
      for (let d = 0; d < this.components.length; d++) {
        if (this.slots[s].pin === this.components[d].pin) {
          this.slots[s].status = true;
          break;
        } else {
          this.slots[s].status = false;
        }
      }
    }
  }

  changeSlot() {
    this.slots.forEach(slot => {
      if (slot.pin === this.selectedComponent.pin) {
        slot.status = true;
      }
    });
  }


  trigger(): void {
    // set or add new item to the storage
    localStorage.setItem('component', JSON.stringify(this.components));
    this.board.call(this.selectedComponent).subscribe((res) => {
      console.log(res);
    });

  }

  checkStorage(storageName: string) {
    if (localStorage.getItem(storageName)) {
      return true;
    }
    return false;
  }
}
