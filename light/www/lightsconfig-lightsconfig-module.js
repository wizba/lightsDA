(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lightsconfig-lightsconfig-module"],{

/***/ "./src/app/lightsconfig/lightsconfig.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/lightsconfig/lightsconfig.module.ts ***!
  \*****************************************************/
/*! exports provided: LightsconfigPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightsconfigPageModule", function() { return LightsconfigPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lightsconfig_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lightsconfig.page */ "./src/app/lightsconfig/lightsconfig.page.ts");







var routes = [
    {
        path: '',
        component: _lightsconfig_page__WEBPACK_IMPORTED_MODULE_6__["LightsconfigPage"]
    }
];
var LightsconfigPageModule = /** @class */ (function () {
    function LightsconfigPageModule() {
    }
    LightsconfigPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_lightsconfig_page__WEBPACK_IMPORTED_MODULE_6__["LightsconfigPage"]]
        })
    ], LightsconfigPageModule);
    return LightsconfigPageModule;
}());



/***/ }),

/***/ "./src/app/lightsconfig/lightsconfig.page.html":
/*!*****************************************************!*\
  !*** ./src/app/lightsconfig/lightsconfig.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<ion-content class=\"backgroundcolorcolor\">\n  <ion-grid>\n    <ion-row>\n      <ion-col size-md=\"12\">\n        <ion-icon name=\"arrow-round-back\" class=\"back-arrow\" routerLink=\"/tabs/tab2\" routerLinkActive=\"router-link-active\" ></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"row-background border-pink\">\n      <ion-col size-sm=\"6\" class=\"item-label\" >\n        Kitchen light\n      </ion-col>\n\n      <ion-col size-sm=\"6\">\n        <ion-icon name=\"arrow-dropright-circle\" class=\"device-arrow pink-arrow\" (click)=\"presentModal()\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"row-background border-purple\">\n      <ion-col size-sm=\"6\" class=\"item-label\" >\n        Lounge light\n      </ion-col>\n\n      <ion-col size-sm=\"6\">\n        <ion-icon name=\"arrow-dropright-circle\" class=\"device-arrow purple-arrow\"  (click)=\"showToast()\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n    <ion-row class=\"row-background border-green\">\n      <ion-col size-sm=\"6\" class=\"item-label\" >\n        Bedroom light\n      </ion-col>\n\n      <ion-col size-sm=\"6\">\n        <ion-icon name=\"arrow-dropright-circle\" class=\"device-arrow green-arrow\"  (click)=\"showToast()\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/lightsconfig/lightsconfig.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/lightsconfig/lightsconfig.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroundcolorcolor {\n  --background: linear-gradient(to bottom right, #8f2784, #0d0939) ; }\n\n.itembg {\n  --background: rgba(0,0,0,0);\n  border: none !important; }\n\n.item-label {\n  color: #fff;\n  padding-top: 15px; }\n\nul,\nli {\n  list-style: none;\n  margin: 0;\n  padding: 0; }\n\n.tgl {\n  display: none; }\n\n.tgl, .tgl:after, .tgl:before,\n  .tgl *,\n  .tgl *:after,\n  .tgl *:before,\n  .tgl + .tgl-btn {\n    box-sizing: border-box; }\n\n.tgl::-moz-selection, .tgl:after::-moz-selection, .tgl:before::-moz-selection,\n    .tgl *::-moz-selection,\n    .tgl *:after::-moz-selection,\n    .tgl *:before::-moz-selection,\n    .tgl + .tgl-btn::-moz-selection {\n      background: none; }\n\n.tgl::selection, .tgl:after::selection, .tgl:before::selection,\n    .tgl *::selection,\n    .tgl *:after::selection,\n    .tgl *:before::selection,\n    .tgl + .tgl-btn::selection {\n      background: none; }\n\n.tgl + .tgl-btn {\n    outline: 0;\n    display: block;\n    width: 4em;\n    height: 2em;\n    position: relative;\n    cursor: pointer;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none; }\n\n.tgl + .tgl-btn:after, .tgl + .tgl-btn:before {\n      position: relative;\n      display: block;\n      content: \"\";\n      width: 50%;\n      height: 100%; }\n\n.tgl + .tgl-btn:after {\n      left: 0; }\n\n.tgl + .tgl-btn:before {\n      display: none; }\n\n.tgl:checked + .tgl-btn:after {\n    left: 100%; }\n\n.tgl-flat + .tgl-btn {\n  padding: 2px;\n  transition: all .2s ease;\n  background: rgba(0, 0, 0, 0);\n  border: 4px solid #848484;\n  border-radius: 2em; }\n\n.tgl-flat + .tgl-btn:after {\n    transition: all .2s ease;\n    background: #848484;\n    content: \"\";\n    border-radius: 1em; }\n\n.tgl-flat:checked + .tgl-btn {\n  border: 4px solid #48c7b0; }\n\n.tgl-flat:checked + .tgl-btn:after {\n    left: 50%;\n    background: #48c7b0; }\n\n.row-background {\n  background-color: rgba(0, 0, 0, 0.3);\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-radius: 5px;\n  margin-bottom: 10px; }\n\n.border-pink {\n  border-left: 8px solid #df53d3; }\n\n.border-purple {\n  border-left: 8px solid #2e295a; }\n\n.border-green {\n  border-left: 8px solid #48c7b0; }\n\n.device-arrow {\n  font-size: 35px;\n  margin-left: 75%; }\n\n.pink-arrow {\n  color: #df53d3; }\n\n.green-arrow {\n  color: #48c7b0; }\n\n.purple-arrow {\n  color: #2e295a; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9keWx1dDIwMDAvRG9jdW1lbnRzL3RlYW0yLWxpZ2h0L2xpZ2h0Mi9zcmMvYXBwL2xpZ2h0c2NvbmZpZy9saWdodHNjb25maWcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUVBQWEsRUFBQTs7QUFHakI7RUFDSSwyQkFBYTtFQUNiLHVCQUF1QixFQUFBOztBQUczQjtFQUNFLFdBQVc7RUFDWCxpQkFBaUIsRUFBQTs7QUFHbkI7O0VBRUMsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxVQUFVLEVBQUE7O0FBR1g7RUFDQyxhQUFhLEVBQUE7O0FBRGQ7Ozs7O0lBV0Usc0JBQXNCLEVBQUE7O0FBWHhCOzs7OztNQWFHLGdCQUFnQixFQUFBOztBQWJuQjs7Ozs7TUFhRyxnQkFBZ0IsRUFBQTs7QUFibkI7SUFrQkUsVUFBVTtJQUNWLGNBQWM7SUFDZCxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2IseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCLEVBQUE7O0FBeEJyQjtNQTJCRyxrQkFBa0I7TUFDbEIsY0FBYztNQUNkLFdBQVc7TUFDWCxVQUFVO01BQ1YsWUFBWSxFQUFBOztBQS9CZjtNQW1DRyxPQUFPLEVBQUE7O0FBbkNWO01BdUNHLGFBQWEsRUFBQTs7QUF2Q2hCO0lBNENFLFVBQVUsRUFBQTs7QUFLWjtFQUVFLFlBQVk7RUFDWix3QkFBd0I7RUFDeEIsNEJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0IsRUFBQTs7QUFOcEI7SUFRRyx3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTs7QUFYckI7RUFnQkkseUJBQXlCLEVBQUE7O0FBaEI3QjtJQWtCTSxTQUFTO0lBQ1QsbUJBQW1CLEVBQUE7O0FBS3pCO0VBQ0Msb0NBQW9DO0VBQ3BDLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUdwQjtFQUNDLDhCQUE4QixFQUFBOztBQUcvQjtFQUNDLDhCQUE4QixFQUFBOztBQUcvQjtFQUNDLDhCQUE4QixFQUFBOztBQUcvQjtFQUNDLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTs7QUFHakI7RUFDQyxjQUFjLEVBQUE7O0FBR2Y7RUFDQyxjQUFjLEVBQUE7O0FBR2Y7RUFDQyxjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9saWdodHNjb25maWcvbGlnaHRzY29uZmlnLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kY29sb3Jjb2xvcntcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICM4ZjI3ODQsICMwZDA5MzkpIDtcbn1cblxuLml0ZW1iZ3tcbiAgICAtLWJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMCk7XG4gICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLWxhYmVse1xuXHRcdGNvbG9yOiAjZmZmO1xuXHRcdHBhZGRpbmctdG9wOiAxNXB4O1xufVxuXG51bCxcbmxpIHtcblx0bGlzdC1zdHlsZTogbm9uZTtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xufVxuXG4udGdsIHtcblx0ZGlzcGxheTogbm9uZTtcbiAgXG5cdC8vIGFkZCBkZWZhdWx0IGJveC1zaXppbmcgZm9yIHRoaXMgc2NvcGVcblx0JixcbiAgJjphZnRlcixcbiAgJjpiZWZvcmUsXG5cdCYgKixcbiAgJiAqOmFmdGVyLFxuICAmICo6YmVmb3JlLFxuXHQmICsgLnRnbC1idG4ge1xuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdFx0Jjo6c2VsZWN0aW9uIHtcblx0XHRcdGJhY2tncm91bmQ6IG5vbmU7XG5cdFx0fVxuXHR9XG4gIFxuXHQrIC50Z2wtYnRuIHtcblx0XHRvdXRsaW5lOiAwO1xuXHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdHdpZHRoOiA0ZW07XG5cdFx0aGVpZ2h0OiAyZW07XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGN1cnNvcjogcG9pbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcblx0XHQmOmFmdGVyLFxuICAgICY6YmVmb3JlIHtcblx0XHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHRcdGRpc3BsYXk6IGJsb2NrO1xuXHRcdFx0Y29udGVudDogXCJcIjtcblx0XHRcdHdpZHRoOiA1MCU7XG5cdFx0XHRoZWlnaHQ6IDEwMCU7XG5cdFx0fVxuICAgIFxuXHRcdCY6YWZ0ZXIge1xuXHRcdFx0bGVmdDogMDtcblx0XHR9XG4gICAgXG5cdFx0JjpiZWZvcmUge1xuXHRcdFx0ZGlzcGxheTogbm9uZTtcblx0XHR9XG5cdH1cbiAgXG5cdCY6Y2hlY2tlZCArIC50Z2wtYnRuOmFmdGVyIHtcblx0XHRsZWZ0OiAxMDAlO1xuXHR9XG59XG5cbi8vIHRoZW1lc1xuLnRnbC1mbGF0IHtcblx0KyAudGdsLWJ0biB7XG5cdFx0cGFkZGluZzogMnB4O1xuXHRcdHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZTtcblx0XHRiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDApO1xuXHRcdGJvcmRlcjogNHB4IHNvbGlkICM4NDg0ODQ7XG5cdFx0Ym9yZGVyLXJhZGl1czogMmVtO1xuXHRcdCY6YWZ0ZXIge1xuXHRcdFx0dHJhbnNpdGlvbjogYWxsIC4ycyBlYXNlO1xuXHRcdFx0YmFja2dyb3VuZDogIzg0ODQ4NDtcblx0XHRcdGNvbnRlbnQ6IFwiXCI7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAxZW07XG5cdFx0fVxuXHR9XG4gIFxuXHQmOmNoZWNrZWQgKyAudGdsLWJ0biB7XG4gICAgYm9yZGVyOiA0cHggc29saWQgIzQ4YzdiMDtcbiAgICAmOmFmdGVyIHtcbiAgICAgIGxlZnQ6IDUwJTtcbiAgICAgIGJhY2tncm91bmQ6ICM0OGM3YjA7XG4gICAgfVxuICB9XG59XG5cbi5yb3ctYmFja2dyb3VuZHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpOyBcblx0cGFkZGluZy10b3A6IDEwcHg7IFxuXHRwYWRkaW5nLWJvdHRvbTogMTBweDsgXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcblx0bWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLmJvcmRlci1waW5re1xuXHRib3JkZXItbGVmdDogOHB4IHNvbGlkICNkZjUzZDM7XG59XG5cbi5ib3JkZXItcHVycGxle1xuXHRib3JkZXItbGVmdDogOHB4IHNvbGlkICMyZTI5NWE7XG59XG5cbi5ib3JkZXItZ3JlZW57XG5cdGJvcmRlci1sZWZ0OiA4cHggc29saWQgIzQ4YzdiMDtcbn1cblxuLmRldmljZS1hcnJvd3tcblx0Zm9udC1zaXplOiAzNXB4OyBcblx0bWFyZ2luLWxlZnQ6IDc1JTtcbn1cblxuLnBpbmstYXJyb3d7XG5cdGNvbG9yOiAjZGY1M2QzO1xufVxuXG4uZ3JlZW4tYXJyb3d7XG5cdGNvbG9yOiAjNDhjN2IwO1xufVxuXG4ucHVycGxlLWFycm93e1xuXHRjb2xvcjogIzJlMjk1YTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/lightsconfig/lightsconfig.page.ts":
/*!***************************************************!*\
  !*** ./src/app/lightsconfig/lightsconfig.page.ts ***!
  \***************************************************/
/*! exports provided: LightsconfigPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LightsconfigPage", function() { return LightsconfigPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _lights_schedule_lights_schedule_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lights-schedule/lights-schedule.page */ "./src/app/lights-schedule/lights-schedule.page.ts");





var LightsconfigPage = /** @class */ (function () {
    function LightsconfigPage(modalController, toastController) {
        this.modalController = modalController;
        this.toastController = toastController;
    }
    LightsconfigPage.prototype.ngOnInit = function () {
    };
    LightsconfigPage.prototype.presentModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _lights_schedule_lights_schedule_page__WEBPACK_IMPORTED_MODULE_3__["LightsSchedulePage"]
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LightsconfigPage.prototype.showToast = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: 'Coming soon',
                            duration: 2000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    LightsconfigPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lightsconfig',
            template: __webpack_require__(/*! ./lightsconfig.page.html */ "./src/app/lightsconfig/lightsconfig.page.html"),
            styles: [__webpack_require__(/*! ./lightsconfig.page.scss */ "./src/app/lightsconfig/lightsconfig.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]])
    ], LightsconfigPage);
    return LightsconfigPage;
}());



/***/ })

}]);
//# sourceMappingURL=lightsconfig-lightsconfig-module.js.map