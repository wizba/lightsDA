import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: '', loadChildren: './terms-conditions/terms-conditions.module#TermsConditionsPageModule' },
  { path: 'add-device', loadChildren: './add-device/add-device.module#AddDevicePageModule' },
  { path: 'device-config', loadChildren: './device-config/device-config.module#DeviceConfigPageModule' },
  { path: 'settings-page', loadChildren: './settings-page/settings-page.module#SettingsPagePageModule' },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
