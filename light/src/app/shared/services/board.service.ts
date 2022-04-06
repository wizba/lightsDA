import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Device } from '../models/device';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  // localhost
   //url: string = 'http://localhost:3000/device';
  
  // localhost rabota pc
  url: string = environment.url + '/device';


  constructor(public http: HttpClient) { }

  /**
   * trigger different light action
   * @param data light DTO
   */
  call(data) {

    if (data.action) data.action = 'on';

    
    return this.http.post(this.url, data);
  }

}
