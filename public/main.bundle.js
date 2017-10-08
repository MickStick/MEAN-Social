webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbar></app-navbar>\n<div class=\"container\">\n    <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__ = __webpack_require__("../../../../../src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */]
    },
    {
        path: 'profile',
        component: __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__["a" /* ProfileComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuardService */]]
    },
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuardService */]]
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_home_home_component__["a" /* HomeComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["HttpModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_15_angular2_flash_messages__["FlashMessagesModule"]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__services_validate_service__["a" /* ValidateService */],
            __WEBPACK_IMPORTED_MODULE_13__services_authentication_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_14__services_auth_guard_service__["a" /* AuthGuardService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    padding: 0 !important;\r\n    margin: 0 !important;\r\n    font-family: 'Roboto';\r\n    font-size: 32px;\r\n}\r\n\r\n.dashboard {\r\n    width: 85%;\r\n    height: auto;\r\n    padding: 15mm 5mm !important;\r\n    margin: 2mm auto 20mm auto !important;\r\n    position: relative;\r\n}\r\n\r\n.dashboard .page-title {\r\n    font-size: 40px;\r\n    text-align: center;\r\n    margin: 1mm 0mm !important;\r\n}\r\n\r\n.dashboard .dash-message {\r\n    font-size: 20px;\r\n    display: block;\r\n    margin: 5mm auto !important;\r\n    padding-left: 3mm !important;\r\n}\r\n\r\n.dashboard .dash-message i {\r\n    font-size: 20px;\r\n}\r\n\r\n@media screen and (max-width: 415px) {\r\n    .dashboard {\r\n        width: 100%;\r\n        padding: 2mm 0mm 4mm 0mm !important;\r\n        margin-bottom: 4mm !important;\r\n    }\r\n    .dashboard .dash-meassage {\r\n        margin-top: 4mm !important;\r\n        width: 80%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 380px) {\r\n    .dashboard .page-title {\r\n        font-size: 36px;\r\n    }\r\n    .dashboard .dash-meassage {\r\n        font-size: 17px;\r\n    }\r\n    .dashboard .dash-message i {\r\n        font-size: 17px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 330px) {\r\n    .dashboard .page-title {\r\n        font-size: 32px;\r\n    }\r\n    .dashboard .dash-meassage {\r\n        font-size: 15px;\r\n    }\r\n    .dashboard .dash-message i {\r\n        font-size: 15px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\" class=\"dashboard\">\n  <label class=\"page-title\">Dashboard</label>\n  <p class=\"dash-message\">Welcome to your \"<i>Dashboard</i>\" {{user.fname}}.</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = (function () {
    function DashboardComponent(authService, FlashMsg, router) {
        this.authService = authService;
        this.FlashMsg = FlashMsg;
        this.router = router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        /*this.authService.getUserData().subscribe(User => {
          this.user = User;
        });*/
        this.user = this.authService.getUserData();
        console.log(this.user);
    };
    DashboardComponent.prototype.onLogout = function () {
        this.authService.userLogout();
        this.FlashMsg.show('User Logged Out!', { cssClass: 'msg msg-caution', timeout: 3000 });
        this.router.navigate(['/login']);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], DashboardComponent);

var _a, _b, _c;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    margin: 0 !important;\r\n    padding: 0 !important;\r\n    font-family: 'Roboto';\r\n}\r\n\r\nhtml {\r\n    position: relative;\r\n    top: 0%;\r\n    left: 0%;\r\n}\r\n\r\n.HomeContainer {\r\n    width: 100%;\r\n    height: auto;\r\n    padding: 5mm 0mm !important;\r\n    color: rgba(50, 50, 50, 0.9);\r\n}\r\n\r\n.HomeContainer>.top-sect {\r\n    width: 85%;\r\n    height: auto;\r\n    padding: 15mm 5mm !important;\r\n    margin: 2mm auto 20mm auto !important;\r\n    background-color: rgba(253, 232, 213, 0.3);\r\n    position: relative;\r\n}\r\n\r\n.HomeContainer .top-sect h1 {\r\n    font-size: 40px;\r\n    text-align: center;\r\n    margin: 1mm 0mm !important;\r\n}\r\n\r\n.HomeContainer .top-sect label {\r\n    font-size: 24px;\r\n    display: block;\r\n    margin: 2mm auto !important;\r\n    text-align: center;\r\n}\r\n\r\n.btn-container {\r\n    width: 160px;\r\n    height: auto;\r\n    margin: 4mm auto 0mm auto !important;\r\n}\r\n\r\n.HomeContainer .top-sect .btn-container .route-btn {\r\n    padding: 2mm !important;\r\n    border: none;\r\n    border-radius: 1.5mm;\r\n    margin-right: 1mm;\r\n    font-size: 20px;\r\n    text-align: center;\r\n    cursor: pointer;\r\n}\r\n\r\n.HomeContainer .top-sect .btn-container .route-btn:focus {\r\n    outline: none;\r\n}\r\n\r\n.HomeContainer .top-sect .btn-container .route-btn .btn-route {\r\n    color: inherit;\r\n    text-decoration: none;\r\n    margin: auto;\r\n}\r\n\r\n.HomeContainer .top-sect .btn-container .route-btn .btn-route:hover {\r\n    color: rgba(240, 240, 240, 0.8);\r\n}\r\n\r\n.HomeContainer .top-sect .btn-container .route-btn .btn-route:focus {\r\n    outline: none;\r\n}\r\n\r\n\r\n/*.btn-def {\r\n    background-color: rgba(45, 54, 92, 1);\r\n    transition: color 250ms, background-color 250ms;\r\n}\r\n\r\n.btn-def:hover {\r\n    background-color: rgba(69, 82, 134, 1);\r\n    color: rgba(240, 240, 240, 0.8);\r\n}\r\n\r\n.btn-def:active {\r\n    background-color: rgba(69, 82, 134, 0.6);\r\n}\r\n\r\n.btn-go {\r\n    background-color: rgba(53, 172, 91, 1);\r\n    transition: color 250ms, background-color 250ms;\r\n}\r\n\r\n.btn-go:hover {\r\n    background-color: rgba(66, 209, 111, 1);\r\n    color: rgba(240, 240, 240, 0.8);\r\n}\r\n\r\n.btn-go:active {\r\n    background-color: rgba(66, 209, 111, 0.6);\r\n}*/\r\n\r\n.sect-title {\r\n    text-align: center;\r\n    font-weight: 800;\r\n    margin: 2% 0% 1% 0%;\r\n    font-size: 26px;\r\n}\r\n\r\n.sect-title hr {\r\n    margin: 0mm auto 4mm auto !important;\r\n    width: 50%;\r\n}\r\n\r\n.sect-title hr:first-of-type {\r\n    width: 70%;\r\n}\r\n\r\n.HomeContainer .third-container {\r\n    width: 100%;\r\n    height: auto;\r\n    background-color: ghost-white;\r\n}\r\n\r\n.HomeContainer .third-container .third-wrap {\r\n    margin: auto !important;\r\n    width: 90%;\r\n    margin-bottom: 10px;\r\n    overflow: hidden;\r\n    font-size: 22px;\r\n}\r\n\r\n.HomeContainer .third-container .one-third {\r\n    float: left;\r\n    width: 30%;\r\n    padding-bottom: 30px;\r\n    height: auto;\r\n    margin: 20px 12px !important;\r\n}\r\n\r\n.HomeContainer .third-container .one-third p {\r\n    margin: auto;\r\n    text-align: center;\r\n    width: 96%;\r\n    font-size: 80%;\r\n}\r\n\r\n@media screen and (max-width: 1040px) {\r\n    .HomeContainer .third-container .one-third {\r\n        margin: 0.35% !important;\r\n    }\r\n    .HomeContainer .third-container .one-third p {\r\n        font-size: 75%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 790px) {\r\n    .HomeContainer .third-container .one-third p {\r\n        font-size: 90%;\r\n    }\r\n    .HomeContainer .third-container .one-third {\r\n        width: 46%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 415px) {\r\n    .HomeContainer .top-sect {\r\n        width: 100%;\r\n        padding: 2mm 0mm 4mm 0mm !important;\r\n        margin-bottom: 4mm !important;\r\n    }\r\n    .HomeContainer .top-sect>label {\r\n        margin-top: 4mm !important;\r\n        width: 80%;\r\n    }\r\n    .HomeContainer .third-container .one-third p {\r\n        font-size: 80%;\r\n    }\r\n    .HomeContainer .third-container .one-third {\r\n        width: 98%;\r\n        margin: 2mm auto !important;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 380px) {\r\n    .HomeContainer .top-sect>h1 {\r\n        font-size: 36px;\r\n    }\r\n    .HomeContainer .top-sect>label {\r\n        font-size: 21px;\r\n        width: 85%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 330px) {\r\n    .HomeContainer .top-sect>h1 {\r\n        font-size: 32px;\r\n    }\r\n    .HomeContainer .top-sect>label {\r\n        font-size: 20px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"HomeContainer\">\n  <div class=\"top-sect\">\n    <h1>MEAN Social Authentication WebApp</h1>\n    <label>Welcome to the MEAN Stack Social Media Authentication Web Application made from scrath, nigga!!</label>\n    <div class=\"btn-container\">\n      <button *ngIf=\"!authService.loggedIn()\" class=\"route-btn btn-def\"><a class=\"btn-route\" [routerLink] = \"['/register']\">Sign Up!</a></button>\n      <button *ngIf=\"!authService.loggedIn()\" class=\"route-btn btn-go\"><a class=\"btn-route\" [routerLink] = \"['/login']\">Login</a></button>\n    </div>\n  </div>\n\n  <div class=\"third-container\">\n    <div class=\"third-wrap\">\n        <div class=\"one-third\">\n          <h4 class=\"sect-title one-third-title\">Express Backend<hr/></h4>\n          <p>A rock solid NodeJS/Express server using Mongoose to organize the models and query the database.</p>\n        </div>\n        <div class=\"one-third\">\n          <h4 class=\"sect-title one-third-title\"> Angular-CLI <hr/></h4>\n          <p>Angular-CLI to generate companents, services and more, Local dev server and easy compilation. </p>\n        </div>\n        <div class=\"one-third\">\n          <h4 class=\"sect-title one-third-title\"> JWT Token <hr/></h4>\n          <p>Full featured authentication using JSON Web Tokens. Login and store user data</p>\n        </div>\n      </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(authService) {
        this.authService = authService;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    margin: 0 !important;\r\n    padding: 0 !important;\r\n    font-family: 'Roboto';\r\n}\r\n\r\nbody {\r\n    padding-top: 15mm !important;\r\n}\r\n\r\n.default-form {\r\n    width: 500px;\r\n    height: auto;\r\n    display: block;\r\n    padding: 2mm 0mm !important;\r\n    margin: auto !important;\r\n    font-size: 28px;\r\n    color: rgba(50, 50, 50, 0.9);\r\n}\r\n\r\n.default-form .form-header {\r\n    width: 100%;\r\n    text-align: center;\r\n    display: block;\r\n    margin: 1mm auto !important;\r\n    font-size: 100%;\r\n}\r\n\r\n.default-form hr {\r\n    width: 60%;\r\n    display: block;\r\n    margin: auto !important;\r\n    border: none;\r\n    border-bottom: 1px solid;\r\n}\r\n\r\n.default-form .data-table {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.default-form .data-table tr {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.default-form .data-table tr td {\r\n    width: 100%;\r\n    height: auto;\r\n    padding: 2px !important;\r\n}\r\n\r\n.default-form .data-table tr td label {\r\n    width: 100%;\r\n    text-align: center;\r\n    display: block;\r\n    margin: 0.5mm auto !important;\r\n    font-size: 70%;\r\n}\r\n\r\n.default-form .data-table tr td input {\r\n    width: 90%;\r\n    height: 24px;\r\n    padding: 2px 4px !important;\r\n    display: block;\r\n    margin: auto !important;\r\n    font-size: 70%;\r\n}\r\n\r\n.default-form .form-btn {\r\n    float: right;\r\n    margin: 2mm 7mm 2mm 0mm !important;\r\n}\r\n\r\n.default-form .form-btn:focus {\r\n    outline: none;\r\n}\r\n\r\n.btn {\r\n    padding: 1mm 2mm !important;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    .default-form {\r\n        width: 100%;\r\n        font-size: 24px;\r\n    }\r\n    .default-form .form-btn {\r\n        margin-right: 5mm !important;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 330px) {\r\n    .default-form .data-table tr td input {\r\n        width: 95%;\r\n    }\r\n    .default-form hr {\r\n        margin-bottom: 2mm !important;\r\n    }\r\n    .default-form .form-btn {\r\n        margin-right: 3mm !important;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"default-form\" (submit)=\"onLoginSubmit()\">\n  <label class=\"form-header\">Login</label>\n  <hr>\n  <table class=\"data-table\">\n    <tr><td><label for=\"uname\">Username</label></td></tr>\n    <tr><td><input type=\"text\" [(ngModel)] = \"uname\" name=\"uname\" placeholder=\"doeboy\"/></td></tr>\n    <tr><td><label for=\"pword\">Password</label></td></tr>\n    <tr><td><input type=\"password\" [(ngModel)] = \"pword\" name=\"pword\" placeholder=\"********\"/></td></tr>\n  </table>\n  <button type=\"submit\" class=\"btn form-btn btn-go\">login</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authService, FlashMsg, router) {
        this.authService = authService;
        this.FlashMsg = FlashMsg;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (!this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    LoginComponent.prototype.onLoginSubmit = function () {
        var _this = this;
        var user = {
            uname: this.uname,
            pword: this.pword
        };
        this.authService.loginUser(user).subscribe(function (data) {
            if (data.success) {
                _this.authService.storeUserData(data);
                _this.FlashMsg.show('Logged In!', { cssClass: 'msg-accept msg', timeout: 2000 });
                _this.router.navigate(['/dashboard']);
            }
            else {
                _this.FlashMsg.show(data.msg, { cssClass: 'msg-danger msg', timeout: 2000 });
                _this.router.navigate(['/login']);
            }
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    margin: 0 !important;\r\n    padding: 0 !important;\r\n}\r\n\r\n.My-navbar {\r\n    width: 100%;\r\n    height: 75px;\r\n    color: rgba(255, 255, 255, 0.9);\r\n    background-color: rgba(50, 50, 50, 1);\r\n    font-size: 28px;\r\n    position: relative;\r\n    top: 0%;\r\n    left: 0%;\r\n    overflow: visible !important;\r\n    font-family: 'Roboto';\r\n    z-index: 5;\r\n}\r\n\r\n.My-navbar .nav-toggler {\r\n    width: 50px;\r\n    height: 50px;\r\n    position: absolute;\r\n    top: 15%;\r\n    right: 5mm;\r\n    background: none;\r\n    border: none;\r\n    border-radius: 200px;\r\n    display: none;\r\n}\r\n\r\n.My-navbar .nav-toggler:focus {\r\n    outline: none;\r\n}\r\n\r\n.My-navbar .nav-toggler i {\r\n    color: rgba(255, 255, 255, 0.9);\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}\r\n\r\n.My-navbar .logo-route {\r\n    color: inherit;\r\n    width: 30%;\r\n    font-size: 100%;\r\n    font-weight: 600;\r\n    padding-left: 10mm !important;\r\n    padding-top: 5mm !important;\r\n    float: left;\r\n}\r\n\r\n.My-navbar .logo-route:hover {\r\n    border: none !important;\r\n    text-decoration: none !important;\r\n}\r\n\r\n.My-navbar .nav-container {\r\n    width: 67%;\r\n    height: 100%;\r\n    float: left;\r\n    display: block;\r\n    /* outline: red solid; */\r\n}\r\n\r\n.My-navbar .nav-routes-left {\r\n    float: left;\r\n    /* width: 15% !important; */\r\n}\r\n\r\n.My-navbar .nav-routes-left li {\r\n    float: left;\r\n}\r\n\r\n.My-navbar .nav-routes-right {\r\n    float: right;\r\n    /* width: 83% !important; */\r\n}\r\n\r\n.My-navbar .nav-container .nav-routes-right article {\r\n    float: right;\r\n    height: 100%;\r\n}\r\n\r\n.My-navbar .nav-container .nav-routes-right li {\r\n    float: left;\r\n    /*display: inline;\r\n    position: relative;\r\n    right: -90%;*/\r\n}\r\n\r\n.My-navbar .nav-container .nav-routes {\r\n    list-style-type: none;\r\n    /* width: 50%; */\r\n    height: 100%;\r\n    /* outline: blue solid; */\r\n}\r\n\r\n.My-navbar .nav-container .nav-routes .route-item {\r\n    font-size: 60%;\r\n    height: 100%;\r\n    width: 22mm;\r\n    text-align: center;\r\n    padding: 0mm 0.5mm !important;\r\n    transition: background-color 250ms;\r\n}\r\n\r\n.My-navbar .nav-container .nav-routes .route-item .route {\r\n    color: inherit !important;\r\n    position: relative;\r\n    top: 9mm !important;\r\n    border-bottom: 1px solid;\r\n    border-color: transparent;\r\n    transition: border-color 250ms, opacity 250ms;\r\n}\r\n\r\n.My-navbar .nav-container .nav-routes .route-item .route:hover {\r\n    border-color: rgba(255, 255, 255, 0.9);\r\n    opacity: 0.5;\r\n}\r\n\r\n.active {\r\n    background-color: rgba(80, 80, 80, 0.5) !important;\r\n}\r\n\r\n@media screen and (max-width:1041px) {\r\n    .My-navbar .logo-route {\r\n        font-size: 75%;\r\n        width: 25%;\r\n    }\r\n    .My-navbar .nav-container {\r\n        width: 71%;\r\n        /*outline: red solid;*/\r\n    }\r\n    .My-navbar .nav-container .nav-routes .route-item {\r\n        margin-top: 0mm !important;\r\n        font-size: 50%;\r\n        font-weight: 600;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 942px) {\r\n    .My-navbar .nav-container {\r\n        width: 60%;\r\n        float: right;\r\n    }\r\n}\r\n\r\n\r\n/*@media screen and (max-width: 950px) {\r\n    .My-navbar .logo-route {\r\n        width: 20%;\r\n    }\r\n    .My-navbar .nav-container {\r\n        width: 79%;\r\n    }\r\n    .My-navbar .nav-container .nav-routes .route-item {\r\n        width: auto !important;\r\n    }\r\n}*/\r\n\r\n@media screen and (max-width: 880px) {\r\n    .My-navbar .logo-route {\r\n        width: 20%;\r\n        font-size: 70%;\r\n    }\r\n    .My-navbar .nav-container {\r\n        width: 70%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 771px) {\r\n    .My-navbar .logo-route {\r\n        font-size: 63%;\r\n        padding-left: 5mm !important;\r\n        padding-top: 6mm !important;\r\n    }\r\n    .My-navbar .nav-container {\r\n        width: 72%\r\n        /*outline: red solid;*/\r\n    }\r\n    .My-navbar .nav-container .nav-routes .route-item {\r\n        margin-top: 0mm !important;\r\n        padding: 0mm 5mm !important;\r\n        font-size: 45%;\r\n        width: auto !important;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 673px) {\r\n    .My-navbar .nav-container .nav-routes {\r\n        width: auto !important;\r\n    }\r\n}\r\n\r\n@media screen and (max-width:663px) {\r\n    .My-navbar .logo-route {\r\n        font-size: 60%;\r\n    }\r\n    .My-navbar .nav-container .nav-routes .route-item {\r\n        padding: 0mm 3mm !important;\r\n    }\r\n    .My-navbar .nav-routes-left {\r\n        width: 9% !important;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 415px) {\r\n    .My-navbar {\r\n        margin: 0 !important;\r\n        position: relative;\r\n    }\r\n    .My-navbar .nav-toggler {\r\n        display: block;\r\n    }\r\n    .My-navbar .logo-route {\r\n        width: 100%;\r\n        height: 100%;\r\n        text-align: center;\r\n        padding-left: 0 !important;\r\n        display: block;\r\n        margin: 0 auto !important;\r\n    }\r\n    .My-navbar .nav-container {\r\n        width: 100%;\r\n        height: auto;\r\n        margin: 0 !important;\r\n        padding: 1mm 0mm !important;\r\n        background: inherit;\r\n        position: absolute;\r\n        top: 100%;\r\n        /*transition: height 250ms;*/\r\n        overflow: hidden;\r\n        display: none;\r\n    }\r\n    .nav-drop {\r\n        height: 100px;\r\n    }\r\n    .My-navbar .nav-container .nav-routes-right article {\r\n        float: none;\r\n        width: 100% !important;\r\n    }\r\n    .My-navbar .nav-container .nav-routes {\r\n        float: none;\r\n        width: 100% !important;\r\n        height: 28px;\r\n        padding: 0.5mm 0mm !important;\r\n    }\r\n    .My-navbar .nav-container .nav-routes .route-item {\r\n        font-size: 63%;\r\n        width: 100% !important;\r\n        height: 100%;\r\n        margin: 0 !important;\r\n        padding: 1mm 0mm !important;\r\n    }\r\n    .My-navbar .nav-container .nav-routes .route-item .route {\r\n        width: 100% !important;\r\n        height: 100%;\r\n        text-align: center;\r\n        display: block;\r\n        top: 1mm !important;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 321px) {\r\n    .My-navbar {\r\n        height: 65px;\r\n    }\r\n    .My-navbar .nav-toggler {\r\n        right: 2mm;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "    <nav class=\"My-navbar\">\n      <a class=\"logo-route\" [routerLink] = \"['/']\"> MEAN Social Auth-APP</a>\n      <div class=\"nav-container\">\n        <ul class=\"nav-routes nav-routes-left\">\n          <li class=\"route-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n            <a class=\"route\"  [routerLink]=\"['/']\"> Home </a>\n          </li>\n        </ul>\n        <ul class=\"nav-routes nav-routes-right\">\n          <article>\n            <li *ngIf=\"!authService.loggedIn()\" class=\"route-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n              <a class=\"route\" [routerLink]=\"['/login']\"> Login </a>\n            </li>\n            <li *ngIf=\"!authService.loggedIn()\" class=\"route-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n              <a class=\"route\" [routerLink]=\"['/register']\"> Register </a>\n            </li>\n            <li *ngIf=\"authService.loggedIn()\" class=\"route-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n              <a class=\"route\" [routerLink]=\"['/dashboard']\"> Dashboard </a>\n            </li>\n            <li *ngIf=\"authService.loggedIn()\" class=\"route-item\" [routerLinkActive]=\"['active']\" [routerLinkActiveOptions] = \"{exact:true}\">\n              <a class=\"route\" [routerLink]=\"['/profile']\"> Profile </a>\n            </li>\n            <li *ngIf=\"authService.loggedIn()\" class=\"route-item\">\n              <a class=\"route\" href=\"#\" (click)=\"onLogout()\"> Logout </a>\n            </li>\n          </article>\n        </ul>\n      </div>\n      <button class=\"nav-toggler\" (click)=\"navDrop()\"><i class=\"material-icons\">arrow_drop_down_circle</i></button>\n\n    </nav>\n"

/***/ }),

/***/ "../../../../../src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import * as $ from 'jquery';
var NavbarComponent = (function () {
    function NavbarComponent(authService, FlashMsg, router) {
        this.authService = authService;
        this.FlashMsg = FlashMsg;
        this.router = router;
        $(document).ready(function () {
            $(window).resize(function () {
                if ($('.My-navbar .nav-toggler').css('display') === 'none') {
                    $('.My-navbar .nav-container').css({ 'display': 'block' });
                }
                else {
                    $('.My-navbar .nav-container').css({ 'display': 'none' });
                }
            });
        });
    }
    NavbarComponent.prototype.navDrop = function () {
        $('.My-navbar .nav-container').animate({ height: 'toggle' });
    };
    NavbarComponent.prototype.onLogout = function () {
        this.authService.userLogout();
        this.FlashMsg.show('User Logged Out!', { cssClass: 'msg msg-caution', timeout: 2000 });
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/components/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _c || Object])
], NavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    margin: 0 !important;\r\n    padding: 0 !important;\r\n}\r\n\r\n* {\r\n    padding: 0 !important;\r\n    margin: 0 !important;\r\n    font-family: 'Roboto';\r\n    font-size: 32px;\r\n}\r\n\r\n.dashboard {\r\n    width: 85%;\r\n    height: auto;\r\n    padding: 15mm 5mm !important;\r\n    margin: 2mm auto 20mm auto !important;\r\n    position: relative;\r\n}\r\n\r\n.dashboard .page-title {\r\n    font-size: 40px;\r\n    text-align: center;\r\n    margin: 1mm 0mm !important;\r\n}\r\n\r\n.dashboard .dash-message {\r\n    font-size: 20px;\r\n    display: block;\r\n    margin: 5mm auto !important;\r\n    padding-left: 3mm !important;\r\n}\r\n\r\n.dashboard .dash-message i {\r\n    font-size: 20px;\r\n}\r\n\r\n.dashboard .list-group {\r\n    width: 100%;\r\n    list-style-type: none;\r\n    padding: 0mm 3mm !important;\r\n    margin-top: 10mm !important;\r\n}\r\n\r\n.dashboard .list-group .list-group-item {\r\n    width: 100%;\r\n    margin-bottom: 2mm !important;\r\n    border-bottom: 1px solid;\r\n    color: rgba(50, 50, 50, 0.9);\r\n    font-size: 20px;\r\n    border-color: rgba(50, 50, 50, 0.9);\r\n}\r\n\r\n@media screen and (max-width: 415px) {\r\n    .dashboard {\r\n        width: 100%;\r\n        padding: 2mm 0mm 4mm 0mm !important;\r\n        margin-bottom: 4mm !important;\r\n    }\r\n    .dashboard .list-group {\r\n        padding: 0 !important;\r\n        width: 95%;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 380px) {\r\n    .dashboard .page-title {\r\n        font-size: 36px;\r\n    }\r\n    .dashboard .list-group .list-group-item {\r\n        font-size: 17px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 330px) {\r\n    .dashboard .page-title {\r\n        font-size: 32px;\r\n    }\r\n    .dashboard .list-group .list-group-item {\r\n        font-size: 15px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"Profile-Container\">\n  <div class=\"To-Post-Container\">\n    <form method = \"POST\" action=\"profile.php\" enctype=\"multipart/form-data\">\n        <textarea\n          rows=\"20\" name=\"post\"\n          placeholder=\"What's going on in your brain right now?\"\n        ></textarea>\n        <button name=\"makePost\" type=\"submit\" id=\"makePost\">\n          <i class=\"material-icons\">add</i>\n        </button>\n        <!--<label for=\"photo_posts\"><i class=\"material-icons\">add_a_photo</i></label>\n        <input type=\"file\" id=\"photo_posts\" accept=\".png,.jpg,\" />-->\n    <!--</form\n    <hr>\n  </div>\n  <div class=\"Post-Container\">\n\n  </div>\n</div>-->\n\n<div *ngIf=\"user\" class=\"dashboard\">\n  <label class=\"page-title\">{{user.fname + \" \" + user.lname}}</label>\n  <ul class=\"list-group\">\n    <li class=\"list-group-item\">Username: {{user.username}}</li>\n    <li class=\"list-group-item\">Email   : {{user.email}}</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getProfile().subscribe(function (profile) {
            _this.user = profile.user;
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/components/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\r\n    margin: 0 !important;\r\n    padding: 0 !important;\r\n    font-family: 'Roboto';\r\n}\r\n\r\n.default-form {\r\n    width: 500px;\r\n    height: auto;\r\n    display: block;\r\n    padding: 2mm 0mm !important;\r\n    margin: auto !important;\r\n    font-size: 28px;\r\n    color: rgba(50, 50, 50, 0.9);\r\n}\r\n\r\n.default-form .form-header {\r\n    width: 100%;\r\n    text-align: center;\r\n    display: block;\r\n    margin: 1mm auto !important;\r\n    font-size: 100%;\r\n}\r\n\r\n.default-form hr {\r\n    width: 60%;\r\n    display: block;\r\n    margin: auto !important;\r\n    border: none;\r\n    border-bottom: 1px solid;\r\n}\r\n\r\n.default-form .data-table {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.default-form .data-table tr {\r\n    width: 100%;\r\n    height: auto;\r\n}\r\n\r\n.default-form .data-table tr td {\r\n    width: 100%;\r\n    height: auto;\r\n    padding: 2px !important;\r\n}\r\n\r\n.default-form .data-table tr td label {\r\n    width: 100%;\r\n    text-align: center;\r\n    display: block;\r\n    margin: 0.5mm auto !important;\r\n    font-size: 70%;\r\n}\r\n\r\n.default-form .data-table tr td input {\r\n    width: 90%;\r\n    height: 24px;\r\n    padding: 2px 4px !important;\r\n    display: block;\r\n    margin: auto !important;\r\n    font-size: 70%;\r\n}\r\n\r\n.default-form .form-btn {\r\n    float: right;\r\n    margin: 2mm 7mm 2mm 0mm !important;\r\n}\r\n\r\n.default-form .form-btn:focus {\r\n    outline: none;\r\n}\r\n\r\n.btn {\r\n    padding: 1mm 2mm !important;\r\n}\r\n\r\n@media screen and (max-width: 500px) {\r\n    .default-form {\r\n        width: 100%;\r\n        font-size: 24px;\r\n    }\r\n    .default-form .form-btn {\r\n        margin-right: 5mm !important;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 330px) {\r\n    .default-form .data-table tr td input {\r\n        width: 95%;\r\n    }\r\n    .default-form hr {\r\n        margin-bottom: 2mm !important;\r\n    }\r\n    .default-form .form-btn {\r\n        margin-right: 3mm !important;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form class=\"default-form\" (submit)=\"onRegisterSubmit()\">\n  <label class=\"form-header\">Register</label>\n  <hr>\n  <table class=\"data-table\">\n    <tr><td><label for=\"fname\">First Name</label></td></tr>\n    <tr><td><input type=\"text\" [(ngModel)] = \"fname\" name=\"fname\" placeholder=\"John\"/></td></tr>\n    <tr><td><label for=\"lname\" >Last Name</label></td></tr>\n    <tr><td><input type=\"text\" [(ngModel)] = \"lname\" name=\"lname\" placeholder=\"Doe\"/></td></tr>\n    <tr><td><label for=\"uname\">Username</label></td></tr>\n    <tr><td><input type=\"text\" [(ngModel)] = \"uname\" name=\"uname\" placeholder=\"doeboy\"/></td></tr>\n    <tr><td><label for=\"email\">Email Address</label></td></tr>\n    <tr><td><input type=\"email\" [(ngModel)] = \"email\" name=\"email\" placeholder=\"exam@ple.com\" (blur)=\"EmailVal()\"/></td></tr>\n    <tr><td><label for=\"pword\">Password</label></td></tr>\n    <tr><td><input type=\"password\" [(ngModel)] = \"pword\" name=\"pword\" placeholder=\"********\"  (blur)=\"PasswordVal()\"/></td></tr>\n    <tr><td><label for=\"rpword\">Re-type Password</label></td></tr>\n    <tr><td><input type=\"password\" [(ngModel)] = \"rpword\" name=\"rpword\" placeholder=\"********\"  (blur)=\"RPasswordVal()\"/></td></tr>\n  </table>\n  <button type=\"submit\" class=\"btn form-btn btn-def\">Register</button>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__("../../../../../src/app/services/validate.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(valService, authService, FlashMsg, router) {
        this.valService = valService;
        this.authService = authService;
        this.FlashMsg = FlashMsg;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        if (!this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/dashboard']);
        }
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var user = {
            fname: this.fname,
            lname: this.lname,
            uname: this.uname,
            email: this.email,
            pword: this.pword,
            rpword: this.rpword
        };
        if (!this.valService.valRegister(user)) {
            this.FlashMsg.show('All Fields Are Required', { cssClass: 'msg-danger msg', timeout: 5000 });
            return false;
        }
        if (!this.valService.regEmailValidate(this.email)) {
            this.FlashMsg.show('Invalid Email', { cssClass: 'msg-danger msg', timeout: 5000 });
            return false;
        }
        if (!this.valService.regPasswordValidate(this.pword)) {
            this.FlashMsg.show('Password Not Strong Enough', { cssClass: 'msg-danger msg', timeout: 5000 });
            return false;
        }
        if (!this.valService.regRPasswordValidate(this.pword, this.rpword)) {
            this.FlashMsg.show('Passwords Must Match', { cssClass: 'msg-danger msg', timeout: 5000 });
            return false;
        }
        this.authService.registerUser(user).subscribe(function (data) {
            if (data.success) {
                _this.FlashMsg.show('Registration Complete. Go Login!', { cssClass: 'msg-accept msg', timeout: 5000 });
                _this.router.navigate(['/login']);
            }
            else {
                _this.FlashMsg.show('Registration Failed!!', { cssClass: 'msg-danger msg', timeout: 5000 });
                _this.router.navigate(['/register']);
            }
        });
    };
    RegisterComponent.prototype.EmailVal = function () {
        if (!this.valService.regEmailValidate(this.email)) {
            this.FlashMsg.show('Invalid Email', { cssClass: 'msg-danger msg', timeout: 5000 });
            return false;
        } /* else {
          this.FlashMsg.show('Email Accepted!', {cssClass: 'msg-accept msg', timeout: 5000});
          return true;
        }*/
    };
    RegisterComponent.prototype.PasswordVal = function () {
        if (!this.valService.regPasswordValidate(this.pword)) {
            this.FlashMsg.show('Password Not Strong Enough', { cssClass: 'msg-danger msg', timeout: 5000 });
            return false;
        } /* else {
          this.FlashMsg.show('Password Accepted!!', {cssClass: 'msg-accept msg', timeout: 5000});
          return true;
        }*/
    };
    RegisterComponent.prototype.RPasswordVal = function () {
        if (!this.valService.regRPasswordValidate(this.pword, this.rpword)) {
            this.FlashMsg.show('Passwords Must Match', { cssClass: 'msg-danger msg', timeout: 5000 });
            return false;
        } /*else {
          this.FlashMsg.show('Password Are A Match!!', {cssClass: 'msg-accept msg', timeout: 5000});
          return true;
        }*/
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === "function" && _d || Object])
], RegisterComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuardService = (function () {
    function AuthGuardService(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function () {
        if (this.authService.loggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
        }
    };
    return AuthGuardService;
}());
AuthGuardService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a" /* AuthenticationService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuardService);

var _a, _b;
//# sourceMappingURL=auth-guard.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt__ = __webpack_require__("../../../../angular2-jwt/angular2-jwt.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_jwt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.Rurl = 'http://localhost:4444/users/register';
        this.Lurl = 'http://localhost:4444/users/auth';
        this.Purl = 'http://localhost:4444/users/profile';
    }
    AuthenticationService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.Rurl, user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        headers.append('Content-type', 'application/json');
        return this.http.post(this.Lurl, user, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.getProfile = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        this.loadToken();
        headers.append('Authorization', this.token);
        headers.append('Content-type', 'application/json');
        return this.http.get(this.Purl, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthenticationService.prototype.storeUserData = function (data) {
        localStorage.setItem('id_token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        this.token = data.token;
        this.user = data.user;
    };
    AuthenticationService.prototype.userLogout = function () {
        this.token = null;
        this.user = null;
        localStorage.clear();
    };
    AuthenticationService.prototype.getUserData = function () {
        var Guser = localStorage.getItem('user');
        this.user = JSON.parse(Guser);
        return this.user;
    };
    AuthenticationService.prototype.loggedIn = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_angular2_jwt__["tokenNotExpired"])('id_token');
    };
    AuthenticationService.prototype.loadToken = function () {
        var Gtoken = localStorage.getItem('id_token');
        this.token = Gtoken;
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]) === "function" && _a || Object])
], AuthenticationService);

var _a;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/validate.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.valRegister = function (user) {
        if (user.fname == undefined || user.lname == undefined || user.uname == undefined || user.email == undefined || user.pword == undefined || user.rpword == undefined) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.regEmailValidate = function (email) {
        var Email = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (!Email.test(email)) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.regPasswordValidate = function (pword) {
        var Pword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W|_?).{8,}$/;
        if (!Pword.test(pword)) {
            return false;
        }
        else if (/^(?=.*\s).{0,}$/.test(pword)) {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.regRPasswordValidate = function (pword, rpword) {
        if (rpword !== pword) {
            return false;
        }
        else {
            return true;
        }
    };
    return ValidateService;
}());
ValidateService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], ValidateService);

//# sourceMappingURL=validate.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map