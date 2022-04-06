import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DeviceService } from './shared/services/device.service';
import { AddDevicePage } from './add-device/add-device.page';
import { AddDevicePageModule } from './add-device/add-device.module';

import { Vibration } from '@ionic-native/vibration/ngx';
import { SettingsPagePageModule } from './settings-page/settings-page.module';
import { SettingsModalService } from './shared/services/settings-modal.service';

import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [AddDevicePage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule, 
    HttpClientModule, 
    FormsModule,
    AddDevicePageModule, 
    SettingsPagePageModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    DeviceService, Vibration, SettingsModalService,
    LocalNotifications
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
