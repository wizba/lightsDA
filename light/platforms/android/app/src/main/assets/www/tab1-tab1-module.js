(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }]),
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content>\n\n    <ion-content>\n        <ion-grid *ngIf=\"deviceService.components.length > 0\">\n            <ion-row>\n              <ion-col size=\"6\" *ngFor=\"let device of deviceService.components; let i = index\" (click)=\"setComponent(device, i); navigate.goTo('/device-config', 'forward')\">\n                <div class=\"animated bounceIn\">\n                <div [className]=\"device.color\">\n                  <ion-icon name=\"bulb\" style=\"font-size: 30px;\"></ion-icon>\n                  <br>{{ device.name }}<br><br>\n                  <span *ngIf=\"device.action\">(On)</span>\n                  <span *ngIf=\"!device.action\">(Off)</span>\n                  \n                </div>\n              </div>\n              </ion-col>\n            </ion-row>\n        </ion-grid>\n    \n        <ion-grid *ngIf=\"deviceService.components.length == 0\" style=\"height: 91vh;\">\n          <ion-row>\n            <ion-text color=\"light\" class=\"ion-text-center\" style=\"padding-top: 50%;\">\n              <p><ion-icon name=\"home\" style=\"font-size:150px;\"></ion-icon></p>\n              <h4>\n                  You have not added any devices as yet...\n              </h4>                      \n            </ion-text>\n          </ion-row>\n        </ion-grid>\n\n        <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n            <!-- pulse infinite slower -->\n          <ion-fab-button (click)=\"presentModal()\" id=\"btnAddDevice\" class=\"animated infinite slower\" style=\"--background: #6a93b3\">\n            <ion-icon name=\"add\"></ion-icon>\n          </ion-fab-button>\n\n          \n          <div style=\"height: 8px\"></div>\n          \n          <ion-fab-button (click)=\"showSettings()\" style=\"--background: #d35a0af6\">\n            <ion-icon name=\"settings\"></ion-icon>\n          </ion-fab-button>\n        </ion-fab>\n\n    </ion-content>\n  \n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*New CSS*/\n.blockOne {\n  width: 100%;\n  background-image: linear-gradient(to right, #12405f, #257070);\n  border-radius: 5px;\n  padding: 40px 10px 40px 10px;\n  text-align: center;\n  color: #fff;\n  border: 1px solid #257070; }\n.blockTwo {\n  width: 100%;\n  background-image: linear-gradient(to right, #12405f, #a32d55);\n  border-radius: 5px;\n  padding: 40px 10px 40px 10px;\n  text-align: center;\n  color: #fff; }\n.blockThree {\n  width: 100%;\n  background-image: linear-gradient(to right, #12405f, #3593be);\n  border-radius: 5px;\n  padding: 40px 10px 40px 10px;\n  text-align: center;\n  color: #fff;\n  border: 1px solid #006956; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9keWx1dDIwMDAvRG9jdW1lbnRzL0xpZ2h0L2xpZ2h0L3NyYy9hcHAvdGFiMS90YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQSxVQUFBO0FBRUE7RUFDRSxXQUFXO0VBQ1gsNkRBQTREO0VBQzVELGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTtBQUczQjtFQUNFLFdBQVc7RUFDWCw2REFBNEQ7RUFDNUQsa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEIsV0FBVyxFQUFBO0FBR2I7RUFDRSxXQUFXO0VBRVgsNkRBQTREO0VBQzVELGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3RhYjEvdGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLy8gQG1lZGlhIChtaW4td2lkdGg6IDQ3NXB4KSBhbmQgKG1heC1oZWlnaHQ6IDY2N3B4KSB7IH1cblxuLypOZXcgQ1NTKi9cblxuLmJsb2NrT25le1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCMxMjQwNWYsICMyNTcwNzApO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDQwcHggMTBweCA0MHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMyNTcwNzA7XG59XG4gIFxuLmJsb2NrVHdve1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCMxMjQwNWYsICNhMzJkNTUpO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIHBhZGRpbmc6IDQwcHggMTBweCA0MHB4IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5ibG9ja1RocmVle1xuICB3aWR0aDogMTAwJTtcbiAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAjNDhjN2IwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIzEyNDA1ZiwgIzM1OTNiZSk7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgcGFkZGluZzogNDBweCAxMHB4IDQwcHggMTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwNjk1Njtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_services_device_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/device.service */ "./src/app/shared/services/device.service.ts");
/* harmony import */ var _add_device_add_device_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-device/add-device.page */ "./src/app/add-device/add-device.page.ts");
/* harmony import */ var _shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/navigate.service */ "./src/app/shared/services/navigate.service.ts");
/* harmony import */ var _shared_services_settings_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/settings-modal.service */ "./src/app/shared/services/settings-modal.service.ts");
/* harmony import */ var _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/services/notification.service */ "./src/app/shared/services/notification.service.ts");
/* harmony import */ var _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/services/toast.service */ "./src/app/shared/services/toast.service.ts");









var Tab1Page = /** @class */ (function () {
    function Tab1Page(alertController, modalController, deviceService, navigate, settingsService, notificationService, toastService) {
        this.alertController = alertController;
        this.modalController = modalController;
        this.deviceService = deviceService;
        this.navigate = navigate;
        this.settingsService = settingsService;
        this.notificationService = notificationService;
        this.toastService = toastService;
    }
    Tab1Page.prototype.ngOnInit = function () {
        this.deviceService.selectSlot();
    };
    // This method is meant to display the add device modal
    Tab1Page.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var devices, modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        devices = localStorage.getItem('component') ? (JSON.parse(localStorage.getItem('component'))) : [];
                        if (!(devices.length < 9)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.modalController.create({
                                component: _add_device_add_device_page__WEBPACK_IMPORTED_MODULE_4__["AddDevicePage"]
                            })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        this.toastService.presentToast('Not slot available for your new device', 2);
                        _a.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    // This method is meant to display the settings modal
    Tab1Page.prototype.showSettings = function () {
        // The method to present the modal will be called from the service settings-modal.service.ts
        this.settingsService.showSettingsPage();
        //this.notificationService.localPush(1, 'Urgency', 'Someone is at ur doors', 5);
    };
    Tab1Page.prototype.setComponent = function (device, i) {
        this.deviceService.selectedComponent = device;
        this.deviceService.selectedComponentIndex = i;
    };
    Tab1Page.prototype.ngAfterViewInit = function () {
        document.querySelectorAll('#btnAddDevice').forEach(function (data) {
            data.classList.remove('pulse');
            data.classList.add('fadeInUp');
        });
        setTimeout(function () {
            document.querySelector('#btnAddDevice').classList.remove('fadeInUp');
            document.querySelector('#btnAddDevice').classList.add('pulse');
        }, 3000);
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _shared_services_device_service__WEBPACK_IMPORTED_MODULE_3__["DeviceService"],
            _shared_services_navigate_service__WEBPACK_IMPORTED_MODULE_5__["NavigateService"],
            _shared_services_settings_modal_service__WEBPACK_IMPORTED_MODULE_6__["SettingsModalService"],
            _shared_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"],
            _shared_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map