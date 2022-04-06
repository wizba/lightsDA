(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["device-config-device-config-module"],{

/***/ "./src/app/device-config/device-config.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/device-config/device-config.module.ts ***!
  \*******************************************************/
/*! exports provided: DeviceConfigPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceConfigPageModule", function() { return DeviceConfigPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _device_config_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./device-config.page */ "./src/app/device-config/device-config.page.ts");







var routes = [
    {
        path: '',
        component: _device_config_page__WEBPACK_IMPORTED_MODULE_6__["DeviceConfigPage"]
    }
];
var DeviceConfigPageModule = /** @class */ (function () {
    function DeviceConfigPageModule() {
    }
    DeviceConfigPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_device_config_page__WEBPACK_IMPORTED_MODULE_6__["DeviceConfigPage"]]
        })
    ], DeviceConfigPageModule);
    return DeviceConfigPageModule;
}());



/***/ }),

/***/ "./src/app/device-config/device-config.page.html":
/*!*******************************************************!*\
  !*** ./src/app/device-config/device-config.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar >\n      <ion-icon slot=\"start\" name=\"arrow-round-back\" class=\"back-arrow\" (click)=\"navigate.goTo('/tabs/tab1', 'backward')\" ></ion-icon>\n    <ion-title text-center>\n      {{ deviceService.selectedComponent.name }}\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"backgroundcolorcolor\">\n\n    <div *ngIf=\"deviceService.selectedComponent\" style=\"padding-bottom: 15px;\">\n\n    <!-- Teboho Start -->\n\n    <ion-item style=\"--background: linear-gradient(to right,#12405f, #4d9696); --inner-border-width: 0px !important; border-bottom: 1px solid #fff;\">\n      <ion-col size-sm=\"6\" class=\"item-label\" style=\"padding-top: 15px; padding-bottom: 15px;\">\n        On/Off\n      </ion-col>\n\n      <ion-col size-sm=\"6\" style=\"padding-top: 15px; padding-bottom: 15px;\">\n        <ul>\n          <li class=\"ion-text-right\" style=\"margin-left: 60%;\">\n            <input type=\"checkbox\" [(ngModel)]=\"deviceService.selectedComponent.action\" id=\"cb1\" class=\"tgl tgl-flat\" (change)=\"deviceService.trigger();\">\n            <label for=\"cb1\" class=\"tgl-btn\"></label>\n          </li>\n        </ul>\n      </ion-col>\n    </ion-item>\n    <ion-item style=\"--background: linear-gradient(to right,#12405f, #4d9696); --inner-border-width: 0px !important; border-bottom: 1px solid #fff;\">\n      <ion-col size-sm=\"6\" class=\"item-label\" style=\"padding-top: 15px; padding-bottom: 15px;\">\n        Schedule\n      </ion-col>\n\n      <ion-col size-sm=\"6\" style=\"padding-top: 15px; padding-bottom: 15px;\">\n        <ul>\n          <li class=\"ion-text-right\" style=\"margin-left: 60%;\">\n            <input type=\"checkbox\" [(ngModel)]=\"showSchedule\" id=\"cb2\" class=\"tgl tgl-flat\" >\n            <label for=\"cb2\" class=\"tgl-btn\"></label>\n          </li>\n        </ul>\n      </ion-col>\n    </ion-item>\n\n    <ion-item *ngIf=\"showSchedule\" class=\"animated fadeIn\" style=\"--background: linear-gradient(to right,#12405f, #4d9696); --inner-border-width: 0px !important; border-bottom: 1px solid #fff; padding-top: 0px !important;\">\n      <ion-label style=\"padding-left: 5px !important;\">Repeat</ion-label>\n      <ion-select value=\"Select day\" okText=\"Okay\" cancelText=\"Cancel\" multiple=\"true\" placeholder=\"Select day\">\n        <ion-select-option value=\"Sunday\">Sunday</ion-select-option>\n        <ion-select-option value=\"Monday\">Monday</ion-select-option>\n        <ion-select-option value=\"Tuesday\">Tuesday</ion-select-option>\n        <ion-select-option value=\"Wednesday\">Wednesday</ion-select-option>\n        <ion-select-option value=\"Thursday\">Thursday</ion-select-option>\n        <ion-select-option value=\"Friday\">Friday</ion-select-option>\n        <ion-select-option value=\"Saturday\">Saturday</ion-select-option>\n      </ion-select>\n        \n    </ion-item>\n\n    <ion-item *ngIf=\"showSchedule\" class=\"animated fadeIn\" style=\"--background: linear-gradient(to right,#12405f, #4d9696); --inner-border-width: 0px !important; border-bottom: 1px solid #fff; padding-top: 0px !important;\">\n        <ion-label style=\"padding-left: 5px !important;\">Switch on at</ion-label>\n        <ion-datetime class=\"text\" [(ngModel)]=\"startDateTime\" display-format=\"MMM DD, YYYY HH:mm\" [min]=\"minDate\" [max]=\"maxDate\" placeholder=\"Select date\"></ion-datetime>\n    </ion-item>\n\n    <ion-item *ngIf=\"showSchedule\" class=\"animated fadeIn\" style=\"--background: linear-gradient(to right,#12405f, #4d9696); --inner-border-width: 0px !important; border-bottom: 1px solid #fff; padding-top: 0px !important;\">\n        <ion-label style=\"padding-left: 5px !important;\">Switch off at</ion-label>\n        <ion-datetime [(ngModel)]=\"endDateTime\" class=\"text\" display-format=\"MMM DD, YYYY HH:mm\" [min]=\"minDate\" [max]=\"maxDate\" placeholder=\"Select date\"></ion-datetime>\n    </ion-item>\n\n    <!-- Teboho End -->\n  </div>\n\n    <ion-row style=\"padding-bottom: 15px;\">\n      <ion-col>\n        <button class=\"button\" (click)=\"showSettings()\" >Configure</button>\n      </ion-col>\n      <ion-col>\n        <button class=\"button\" (click)=\"presentAlert()\" >Remove</button>\n      </ion-col>\n    </ion-row>\n\n  <div *ngIf=\"showSetting\" class=\"row-background animated fadeIn\">\n    <ion-item style=\"--background: rgba(0, 0, 0, 0) !important; padding-top: 0px !important; --padding-start: 15px !important; --padding-end: 20px !important; --padding-bottom: 10px !important;\">\n      <ion-label position=\"floating\" color=\"#fff\">Device Name</ion-label>\n      <ion-input type=\"text\" color=\"#fff\" [(ngModel)]=\"deviceService.selectedComponent.name\" ></ion-input>\n    </ion-item>\n\n    <ion-item *ngIf=\"!showSlotConfig\" style=\"--background: rgba(0, 0, 0, 0) !important; padding-top: 0px !important; --padding-start: 15px !important; --padding-end: 20px !important; --padding-bottom: 10px !important;\">\n      <ion-label position=\"floating\" color=\"#fff\">Slot</ion-label>\n      <ion-select placeholder={{deviceService.selectedComponent.pin}} [(ngModel)]=\"deviceService.selectedComponent.pin\" value=\"deviceService.selectedComponent.pin\" (ionChange)=\"changeSlot()\">\n          <ion-item *ngFor=\"let slot of deviceService.slots;\">\n              <ion-select-option *ngIf=\"!slot.status\" [value]=\"slot.pin\">Slot {{ slot.pin }}</ion-select-option>\n            </ion-item>\n        </ion-select>\n    </ion-item>\n  </div>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/device-config/device-config.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/device-config/device-config.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroundcolorcolor {\n  --background: linear-gradient(#7da7c7,#13415f); }\n\n.itembg {\n  --background: rgba(0,0,0,0);\n  border: none !important; }\n\n.item-label {\n  color: #fff;\n  padding-top: 15px; }\n\n.text {\n  color: #fff; }\n\nul,\nli {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.tgl {\n  display: none; }\n\n.tgl, .tgl:after, .tgl:before,\n  .tgl *,\n  .tgl *:after,\n  .tgl *:before,\n  .tgl + .tgl-btn {\n    box-sizing: border-box; }\n\n.tgl::-moz-selection, .tgl:after::-moz-selection, .tgl:before::-moz-selection,\n    .tgl *::-moz-selection,\n    .tgl *:after::-moz-selection,\n    .tgl *:before::-moz-selection,\n    .tgl + .tgl-btn::-moz-selection {\n      background: none; }\n\n.tgl::selection, .tgl:after::selection, .tgl:before::selection,\n    .tgl *::selection,\n    .tgl *:after::selection,\n    .tgl *:before::selection,\n    .tgl + .tgl-btn::selection {\n      background: none; }\n\n.tgl + .tgl-btn {\n    outline: 0;\n    display: block;\n    width: 4em;\n    height: 2em;\n    position: relative;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n.tgl + .tgl-btn:after, .tgl + .tgl-btn:before {\n      position: relative;\n      display: block;\n      content: \"\";\n      width: 50%;\n      height: 100%; }\n\n.tgl + .tgl-btn:after {\n      left: 0; }\n\n.tgl + .tgl-btn:before {\n      display: none; }\n\n.tgl:checked + .tgl-btn:after {\n    left: 100%; }\n\n.tgl-flat + .tgl-btn {\n  padding: 2px;\n  transition: all .2s ease;\n  background: rgba(0, 0, 0, 0);\n  border: 4px solid #12405f;\n  border-radius: 2em; }\n\n.tgl-flat + .tgl-btn:after {\n    transition: all .2s ease;\n    background: #12405f;\n    content: \"\";\n    border-radius: 1em; }\n\n.tgl-flat:checked + .tgl-btn {\n  border: 4px solid #03e788f6; }\n\n.tgl-flat:checked + .tgl-btn:after {\n    left: 50%;\n    background: #03e788f6; }\n\n.row-background {\n  background-image: linear-gradient(to right, #12405f, #4d9696);\n  padding-top: 10px;\n  padding-bottom: 10px;\n  padding-left: 10px;\n  border-radius: 5px;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9keWx1dDIwMDAvRG9jdW1lbnRzL0xpZ2h0L2xpZ2h0L3NyYy9hcHAvZGV2aWNlLWNvbmZpZy9kZXZpY2UtY29uZmlnLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDhDQUFhLEVBQUE7O0FBR2Q7RUFDSSwyQkFBYTtFQUNiLHVCQUF1QixFQUFBOztBQUczQjtFQUNFLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDQyxXQUFXLEVBQUE7O0FBR1o7O0VBRUMsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR1g7RUFDQyxhQUFhLEVBQUE7O0FBRGQ7Ozs7O0lBV0Usc0JBQXNCLEVBQUE7O0FBWHhCOzs7OztNQWFHLGdCQUFnQixFQUFBOztBQWJuQjs7Ozs7TUFhRyxnQkFBZ0IsRUFBQTs7QUFibkI7SUFrQkUsVUFBVTtJQUNWLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2IseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCLEVBQUE7O0FBeEJyQjtNQTJCRyxrQkFBa0I7TUFDbEIsY0FBYztNQUNkLFdBQVc7TUFDWCxVQUFVO01BQ1YsWUFBWSxFQUFBOztBQS9CZjtNQW1DRyxPQUFPLEVBQUE7O0FBbkNWO01BdUNHLGFBQWEsRUFBQTs7QUF2Q2hCO0lBNENFLFVBQVUsRUFBQTs7QUFLWjtFQUVFLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsNEJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFOcEI7SUFRRyx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTs7QUFYckI7RUFnQkksMkJBQTJCLEVBQUE7O0FBaEIvQjtJQWtCTSxTQUFTO0lBQ1QscUJBQXFCLEVBQUE7O0FBSzNCO0VBQ0MsNkRBQTREO0VBQzVELGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2RldmljZS1jb25maWcvZGV2aWNlLWNvbmZpZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZGNvbG9yY29sb3J7XG5cdC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCM3ZGE3YzcsIzEzNDE1Zik7XG59XG5cbi5pdGVtYmd7XG4gICAgLS1iYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1sYWJlbHtcblx0XHRjb2xvcjogI2ZmZjtcblx0XHRwYWRkaW5nLXRvcDogMTVweDtcbn1cblxuLnRleHR7XG5cdGNvbG9yOiAjZmZmO1xufVxuXG51bCxcbmxpIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xufVxuXG4udGdsIHtcblx0ZGlzcGxheTogbm9uZTtcbiAgXG5cdC8vIGFkZCBkZWZhdWx0IGJveC1zaXppbmcgZm9yIHRoaXMgc2NvcGVcblx0JixcbiAgJjphZnRlcixcbiAgJjpiZWZvcmUsXG5cdCYgKixcbiAgJiAqOmFmdGVyLFxuICAmICo6YmVmb3JlLFxuXHQmICsgLnRnbC1idG4ge1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0Jjo6c2VsZWN0aW9uIHtcblx0XHRcdGJhY2tncm91bmQ6IG5vbmU7XG5cdFx0fVxuXHR9XG4gIFxuXHQrIC50Z2wtYnRuIHtcblx0XHRvdXRsaW5lOiAwO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHdpZHRoOiA0ZW07XG5cdFx0aGVpZ2h0OiAyZW07XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcblx0XHQmOmFmdGVyLFxuICAgICY6YmVmb3JlIHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0fVxuICAgIFxuXHRcdCY6YWZ0ZXIge1xuXHRcdFx0bGVmdDogMDtcblx0XHR9XG4gICAgXG5cdFx0JjpiZWZvcmUge1xuXHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHR9XG5cdH1cbiAgXG5cdCY6Y2hlY2tlZCArIC50Z2wtYnRuOmFmdGVyIHtcblx0XHRsZWZ0OiAxMDAlO1xuXHR9XG59XG5cbi8vIHRoZW1lc1xuLnRnbC1mbGF0IHtcblx0KyAudGdsLWJ0biB7XG5cdFx0cGFkZGluZzogMnB4O1xuXHRcdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xuXHRcdGJvcmRlcjogNHB4IHNvbGlkICMxMjQwNWY7XG5cdFx0Ym9yZGVyLXJhZGl1czogMmVtO1xuXHRcdCY6YWZ0ZXIge1xuXHRcdFx0dHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuXHRcdFx0YmFja2dyb3VuZDogIzEyNDA1Zjtcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAxZW07XG5cdFx0fVxuXHR9XG4gIFxuXHQmOmNoZWNrZWQgKyAudGdsLWJ0biB7XG4gICAgYm9yZGVyOiA0cHggc29saWQgIzAzZTc4OGY2O1xuICAgICY6YWZ0ZXIge1xuICAgICAgbGVmdDogNTAlO1xuICAgICAgYmFja2dyb3VuZDogIzAzZTc4OGY2O1xuICAgIH1cbiAgfVxufVxuXG4ucm93LWJhY2tncm91bmR7XG5cdGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjMTI0MDVmLCAjNGQ5Njk2KTsgXG5cdHBhZGRpbmctdG9wOiAxMHB4OyBcblx0cGFkZGluZy1ib3R0b206IDEwcHg7IFxuXHRwYWRkaW5nLWxlZnQ6IDEwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/device-config/device-config.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/device-config/device-config.page.ts ***!
  \*****************************************************/
/*! exports provided: DeviceConfigPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeviceConfigPage", function() { return DeviceConfigPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/navigate.service */ "./src/app/shared/services/navigate.service.ts");
/* harmony import */ var _shared_services_device_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/device.service */ "./src/app/shared/services/device.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");






var DeviceConfigPage = /** @class */ (function () {
    //currentDate = `${this.date.getFullYear()}-${this.date.getMonth()}-${this.date.getDate()}`;
    function DeviceConfigPage(navigate, deviceService, toast, alert) {
        this.navigate = navigate;
        this.deviceService = deviceService;
        this.toast = toast;
        this.alert = alert;
        this.showSetting = false;
        this.showSchedule = false;
        this.date = new Date();
        this.showSlotConfig = false;
        this.start = new Date(this.startDateTime);
        this.getSysDateTime();
    }
    DeviceConfigPage.prototype.ngOnInit = function () {
        if (this.deviceService.selectedComponent.name.length == 0) {
            this.navigate.goTo('tabs/tab1', 'kjhgf');
        }
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();
        this.minDate = yyyy + '-' + mm + '-' + dd;
        this.maxDate = String(+yyyy + 2) + '-' + mm;
    };
    DeviceConfigPage.prototype.showSettings = function () {
        this.showSlotConfig = (this.deviceService.slots.filter(function (data) { return data.status == false; })).length == 0 ? true : false;
        if ((this.deviceService.slots.filter(function (data) { return data.status == false; })).length == 0) {
            this.toast.presentToast('No slot available, you might remove a device to free your slot', 4);
        }
        this.showSetting = !this.showSetting;
    };
    DeviceConfigPage.prototype.removeDevice = function () {
        var _this = this;
        this.deviceService.selectedComponent.action = false;
        this.deviceService.trigger();
        this.deviceService.components = this.deviceService.components.filter(function (device) {
            return device !== _this.deviceService.selectedComponent;
        });
        this.deviceService.slots.map(function (data) {
            if (data.pin == _this.deviceService.selectedComponent.pin) {
                data.status = false;
            }
        });
        localStorage.setItem('component', JSON.stringify(this.deviceService.components));
        this.navigate.goTo('/tabs/tab1', 'backward');
        var message = this.deviceService.selectedComponent.name + " successfully removed";
        this.toast.presentToast(message, 1);
        console.log(this.deviceService.components);
    };
    DeviceConfigPage.prototype.presentAlert = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alert.create({
                            header: 'Confirm!',
                            message: 'Are You Sure You Want To Remove This Device?',
                            buttons: [
                                {
                                    text: 'Cancel',
                                    handler: function () {
                                        // console.log('Confirm Cancel');
                                    }
                                }, {
                                    text: 'Remove',
                                    handler: function () {
                                        // console.log('Confirm Okay');
                                        _this.removeDevice();
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DeviceConfigPage.prototype.changeSlot = function () {
        this.deviceService.selectSlot();
    };
    DeviceConfigPage.prototype.getSysDateTime = function () {
        var _this = this;
        setInterval(function () {
            var currentdateTime = new Date().toString();
            var start = new Date(_this.startDateTime).toString();
            var end = new Date(_this.endDateTime).toString();
            if (currentdateTime === start && _this.startDateTime !== undefined && _this.showSchedule === true) {
                _this.deviceService.selectedComponent.action = true;
                _this.deviceService.trigger();
            }
            if (currentdateTime === end && _this.startDateTime !== undefined) {
                _this.deviceService.selectedComponent.action = false;
                _this.deviceService.trigger();
            }
            //this.sysDateTime = currentdateTime;
            //this.sysDateTime = currentdateTime.toDateString() + ' ' + currentdateTime.toLocaleTimeString();
        }, 1000);
    };
    DeviceConfigPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-device-config',
            template: __webpack_require__(/*! ./device-config.page.html */ "./src/app/device-config/device-config.page.html"),
            styles: [__webpack_require__(/*! ./device-config.page.scss */ "./src/app/device-config/device-config.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_2__["NavigateService"],
            _shared_services_device_service__WEBPACK_IMPORTED_MODULE_3__["DeviceService"],
            _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__["ToastService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]])
    ], DeviceConfigPage);
    return DeviceConfigPage;
}());



/***/ })

}]);
//# sourceMappingURL=device-config-device-config-module.js.map