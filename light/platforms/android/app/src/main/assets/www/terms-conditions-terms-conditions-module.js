(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["terms-conditions-terms-conditions-module"],{

/***/ "./src/app/terms-conditions/terms-conditions.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.module.ts ***!
  \*************************************************************/
/*! exports provided: TermsConditionsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsPageModule", function() { return TermsConditionsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _terms_conditions_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./terms-conditions.page */ "./src/app/terms-conditions/terms-conditions.page.ts");







var routes = [
    {
        path: '',
        component: _terms_conditions_page__WEBPACK_IMPORTED_MODULE_6__["TermsConditionsPage"]
    }
];
var TermsConditionsPageModule = /** @class */ (function () {
    function TermsConditionsPageModule() {
    }
    TermsConditionsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_terms_conditions_page__WEBPACK_IMPORTED_MODULE_6__["TermsConditionsPage"]]
        })
    ], TermsConditionsPageModule);
    return TermsConditionsPageModule;
}());



/***/ }),

/***/ "./src/app/terms-conditions/terms-conditions.page.html":
/*!*************************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-content class=\"backgroundcolorcolor\" padding>\n  <ion-row>\n    <ion-text color=\"light\">\n      <h4>Terms and conditions</h4>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n        Cras vel eleifend magna. Aenean scelerisque suscipit magna, \n        a sodales lectus condimentum id. Integer efficitur purus a \n        hendrerit maximus. Morbi pharetra ante non porta faucibus. \n        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices \n        posuere cubilia Curae; Integer tincidunt ut nisi id dapibus. \n        Ut sit amet congue elit. Morbi a elit diam. Duis at euismod urna.\n      </p>\n\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n        Cras vel eleifend magna. Aenean scelerisque suscipit magna, \n        a sodales lectus condimentum id. Integer efficitur purus a \n        hendrerit maximus. Morbi pharetra ante non porta faucibus. \n        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices \n        posuere cubilia Curae; Integer tincidunt ut nisi id dapibus. \n        Ut sit amet congue elit. Morbi a elit diam. Duis at euismod urna.\n      </p>\n\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit. \n        Cras vel eleifend magna. Aenean scelerisque suscipit magna, \n        a sodales lectus condimentum id. Integer efficitur purus a \n        hendrerit maximus. Morbi pharetra ante non porta faucibus. \n        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices \n        posuere cubilia Curae; Integer tincidunt ut nisi id dapibus.\n      </p>\n    </ion-text>\n  </ion-row>\n\n  <button class=\"button\" routerLink=\"/tabs\">Accept</button>\n\n</ion-content>\n\n"

/***/ }),

/***/ "./src/app/terms-conditions/terms-conditions.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".backgroundcolorcolor {\n  --background: linear-gradient(#6089a8,#1e5275); }\n\n.row-background {\n  background-color: rgba(0, 0, 0, 0.3);\n  padding-top: 10px;\n  padding-bottom: 10px;\n  border-radius: 5px;\n  margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9keWx1dDIwMDAvRG9jdW1lbnRzL0xpZ2h0L2xpZ2h0L3NyYy9hcHAvdGVybXMtY29uZGl0aW9ucy90ZXJtcy1jb25kaXRpb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLDhDQUFhLEVBQUE7O0FBR2Q7RUFDQyxvQ0FBb0M7RUFDcEMsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90ZXJtcy1jb25kaXRpb25zL3Rlcm1zLWNvbmRpdGlvbnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmRjb2xvcmNvbG9ye1xuXHQtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjNjA4OWE4LCMxZTUyNzUpO1xufVxuXG4ucm93LWJhY2tncm91bmR7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTsgXG5cdHBhZGRpbmctdG9wOiAxMHB4OyBcblx0cGFkZGluZy1ib3R0b206IDEwcHg7IFxuXHRib3JkZXItcmFkaXVzOiA1cHg7XG5cdG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/terms-conditions/terms-conditions.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/terms-conditions/terms-conditions.page.ts ***!
  \***********************************************************/
/*! exports provided: TermsConditionsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsPage", function() { return TermsConditionsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TermsConditionsPage = /** @class */ (function () {
    function TermsConditionsPage() {
    }
    TermsConditionsPage.prototype.ngOnInit = function () {
    };
    TermsConditionsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-terms-conditions',
            template: __webpack_require__(/*! ./terms-conditions.page.html */ "./src/app/terms-conditions/terms-conditions.page.html"),
            styles: [__webpack_require__(/*! ./terms-conditions.page.scss */ "./src/app/terms-conditions/terms-conditions.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TermsConditionsPage);
    return TermsConditionsPage;
}());



/***/ })

}]);
//# sourceMappingURL=terms-conditions-terms-conditions-module.js.map