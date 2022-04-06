(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Notifications\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <div #notificationRef class=\"notification-card-wrapper\">\n    <h4>Automated Devices</h4>\n    <div id=\"notList\" class=\"notification-card animated fadeInUp delay-{{ i }}s\" *ngFor=\"let device of trigeredDivices; let i = index;\">\n        <p class=\"notification-card-header\"><strong>{{ device.title }} - {{ device.time }}</strong> </p>\n        <p class=\"notification-card-content\">\n        {{ device.text }}\n        </p>\n    </div>\n  </div> -->\n\n  <!-- <ion-list>\n    <ion-item-sliding >\n      <ion-item #notificationRef id=\"notList\" class=\"animated fadeInUp delay-{{ i }}s\" *ngFor=\"let device of trigeredDivices; let i = index;\" style=\"--background: linear-gradient(to right,#12405f, #4d9696) !important; color: #fff; --inner-border-width: 0px !important;\">\n        <ion-label>\n          <h2>{{ device.title }}</h2>\n          <p style=\"color:#fff\">{{ device.text }}</p>\n          <p  style=\"color:#fff\">{{ device.text }}</p>\n        </ion-label>\n        <ion-note slot=\"end\" style=\"color:#fff\">\n          {{ device.time }}\n        </ion-note>\n      </ion-item>\n  \n      <ion-item-options side=\"start\">\n        <ion-item-option style=\"--background: #d35a0af6\">\n          <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n  \n      <ion-item-options side=\"end\">\n        <ion-item-option style=\"--background: #d35a0af6\">\n          <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list> -->\n\n    \n  <ion-item-sliding id=\"notList\" class=\" bottom-border animated fadeInUp delay-{{ i }}s\" *ngFor=\"let device of trigeredDivices; let i = index;\" >\n    <ion-item href=\"#\" #notificationRef class=\"notification-item\">\n      <ion-label>\n        <h2 class=\"text\">{{ device.title }}</h2>\n        <p class=\"text\">{{ device.text }}</p>\n        <p class=\"text\">{{ device.text }}</p>\n      </ion-label>\n      <ion-note slot=\"end\" class=\"text\">\n        {{ device.time }}\n      </ion-note>\n    </ion-item>\n\n    <ion-item-options side=\"start\">\n      <ion-item-option class=\"delete\">\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-item-option>\n    </ion-item-options>\n\n    <ion-item-options side=\"end\">\n      <ion-item-option class=\"delete\">\n        <ion-icon slot=\"icon-only\" name=\"trash\"></ion-icon>\n      </ion-item-option>\n    </ion-item-options>\n  </ion-item-sliding>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button (click)=\"showSettings()\" style=\"--background: #d35a0af6\">\n      <ion-icon name=\"settings\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n    \n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bottom-border {\n  border-bottom: 1px solid #fff; }\n\n.notification-item {\n  --background: linear-gradient(to right,#12405f, #4d9696) !important;\n  color: #fff;\n  --inner-border-width: 0px !important; }\n\n.text {\n  color: #fff; }\n\n.delete {\n  --background: #d35a0af6; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9keWx1dDIwMDAvRG9jdW1lbnRzL0xpZ2h0L2xpZ2h0L3NyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QixFQUFBOztBQUcvQjtFQUNFLG1FQUFhO0VBQXdELFdBQVc7RUFBRSxvQ0FBcUIsRUFBQTs7QUFHekc7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSx1QkFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdGFiMi90YWIyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3R0b20tYm9yZGVye1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbn1cblxuLm5vdGlmaWNhdGlvbi1pdGVte1xuICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwjMTI0MDVmLCAjNGQ5Njk2KSAhaW1wb3J0YW50OyBjb2xvcjogI2ZmZjsgLS1pbm5lci1ib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xufVxuXG4udGV4dHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5kZWxldGV7XG4gIC0tYmFja2dyb3VuZDogI2QzNWEwYWY2O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _shared_services_settings_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/settings-modal.service */ "./src/app/shared/services/settings-modal.service.ts");




var Tab2Page = /** @class */ (function () {
    function Tab2Page(alertController, settingsService) {
        this.alertController = alertController;
        this.settingsService = settingsService;
        this.notifications = "Triggers";
        this.notList = document.querySelector('.notification-card');
        this.trigeredDivices = [
            {
                title: 'Motion Detection',
                time: '08:06AM',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                title: 'Motion Detection',
                time: '08:06AM',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                title: 'Motion Detection',
                time: '08:06AM',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                title: 'Motion Detection',
                time: '08:06AM',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            },
            {
                title: 'Motion Detection',
                time: '08:06AM',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
            }
        ];
    }
    Tab2Page.prototype.ngOnInit = function () {
        // console.log(this.notificationRef);
        // console.log(document.querySelectorAll('#notList'));
    };
    Tab2Page.prototype.showSettings = function () {
        // The method to present the modal will be called from the service settings-modal.service.ts
        this.settingsService.showSettingsPage();
    };
    Tab2Page.prototype.ngAfterViewInit = function () {
        // console.log('this.notificationRef');
        var count = 1000 * document.querySelectorAll('#notList').length;
        setTimeout(function () {
            document.querySelectorAll('#notList').forEach(function (data) {
                data.classList.remove('animated');
            });
        }, count);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('notificationRef'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], Tab2Page.prototype, "notificationRef", void 0);
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _shared_services_settings_modal_service__WEBPACK_IMPORTED_MODULE_3__["SettingsModalService"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map