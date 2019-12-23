(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatHeaderWrapper {\r\n    height: 90px;\r\n    color: #222;\r\n    box-shadow: 0 2px 3px rgba(0,0,0,0.37), 1px 2px 3px rgba(0,0,0,0.54);\r\n    z-index: 2;\r\n}\r\n\r\n.chatRoom {\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nrouter-outlet {\r\n    height:0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHFFQUFxRTtJQUNyRSxXQUFXO0NBQ2Q7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsY0FBYztJQUNkLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLFNBQVM7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXRIZWFkZXJXcmFwcGVyIHtcclxuICAgIGhlaWdodDogOTBweDtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwwLDAsMC4zNyksIDFweCAycHggM3B4IHJnYmEoMCwwLDAsMC41NCk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uY2hhdFJvb20ge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbnJvdXRlci1vdXRsZXQge1xyXG4gICAgaGVpZ2h0OjA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatRoom\">\n  <div class=\"chatHeaderWrapper\">\n    <app-navbar></app-navbar>\n  </div>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Chatting with friend';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chat-form/chat-form.component */ "./src/app/chat-form/chat-form.component.ts");
/* harmony import */ var _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./chatroom/chatroom.component */ "./src/app/chatroom/chatroom.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _logi_form_logi_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./logi-form/logi-form.component */ "./src/app/logi-form/logi-form.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "./src/app/signup-form/signup-form.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _user_item_user_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./user-item/user-item.component */ "./src/app/user-item/user-item.component.ts");
/* harmony import */ var src_routes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/routes */ "./src/routes.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./chat.service */ "./src/app/chat.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_10__["ChatFormComponent"],
                _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_11__["ChatroomComponent"],
                _feed_feed_component__WEBPACK_IMPORTED_MODULE_12__["FeedComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_13__["MessageComponent"],
                _logi_form_logi_form_component__WEBPACK_IMPORTED_MODULE_14__["LogiFormComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_15__["LoginFormComponent"],
                _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_16__["SignupFormComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_17__["NavbarComponent"],
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_18__["UserListComponent"],
                _user_item_user_item_component__WEBPACK_IMPORTED_MODULE_19__["UserItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"],
                angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"],
                angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_23__["environment"].firebase),
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(src_routes__WEBPACK_IMPORTED_MODULE_20__["appRoutes"])
            ],
            providers: [_auth_service__WEBPACK_IMPORTED_MODULE_21__["AuthService"], _chat_service__WEBPACK_IMPORTED_MODULE_22__["ChatService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");





var AuthService = /** @class */ (function () {
    function AuthService(afAuth, db, router) {
        this.afAuth = afAuth;
        this.db = db;
        this.router = router;
        this.user = afAuth.authState;
    }
    AuthService.prototype.authUser = function () {
        return this.user;
    };
    Object.defineProperty(AuthService.prototype, "currentUserId", {
        get: function () {
            return this.authState !== null ? this.authState.uid : '';
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            _this.setUserStatus('online');
            _this.router.navigate(['chat']);
        });
    };
    AuthService.prototype.logout = function () {
        this.afAuth.auth.signOut();
        this.router.navigate(['login']);
    };
    AuthService.prototype.signUp = function (email, password, displayName) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            var status = 'online';
            _this.setUserData(email, displayName, status);
        }).catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.setUserData = function (email, displayName, status) {
        var path = "users/" + this.currentUserId;
        var data = {
            email: email,
            displayName: displayName,
            status: status
        };
        this.db.object(path).update(data)
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.setUserStatus = function (status) {
        var path = "users/" + this.currentUserId;
        var data = {
            status: status
        };
        this.db.object(path).update(data)
            .catch(function (error) { return console.log(error); });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/chat-form/chat-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatInput{\r\n    flex: 10;\r\n    font-size: 1.3em;\r\n    font-family: 'Open Sans', sans-serif;\r\n    background-color: #eee;\r\n    color: #000;\r\n    transition: 0.1s ease-out;\r\n    padding-left: 80px;\r\n}\r\n\r\n.chatInput:focus{\r\n    background-color: #E4F1FE;\r\n    color: #222;\r\n    transition: 0.2s ease-in;\r\n}\r\n\r\n.chatButton{\r\n    flex: 1;\r\n    padding: 10px;\r\n    padding: 8px 24px;\r\n    font-size: 1.3em;\r\n    font-family: 'Droid Sans', sans-serif;\r\n    background-color: #2A2845;\r\n    color: white;\r\n    transition: 0.2s ease-out;\r\n    min-width: 50px;\r\n}\r\n\r\n.chatButton:hover{\r\n    background-color: #444;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1mb3JtL2NoYXQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtJQUNqQixxQ0FBcUM7SUFDckMsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLFlBQVk7SUFDWix5QkFBeUI7Q0FDNUI7O0FBRUQ7SUFDSSxRQUFRO0lBQ1IsY0FBYztJQUNkLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsc0NBQXNDO0lBQ3RDLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGdCQUFnQjtDQUNuQjs7QUFFRDtJQUNJLHVCQUF1QjtDQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtZm9ybS9jaGF0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0SW5wdXR7XHJcbiAgICBmbGV4OiAxMDtcclxuICAgIGZvbnQtc2l6ZTogMS4zZW07XHJcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xyXG59XHJcblxyXG4uY2hhdElucHV0OmZvY3Vze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U0RjFGRTtcclxuICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgdHJhbnNpdGlvbjogMC4ycyBlYXNlLWluO1xyXG59XHJcblxyXG4uY2hhdEJ1dHRvbntcclxuICAgIGZsZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDI0cHg7XHJcbiAgICBmb250LXNpemU6IDEuM2VtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdEcm9pZCBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQTI4NDU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjJzIGVhc2Utb3V0O1xyXG4gICAgbWluLXdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uY2hhdEJ1dHRvbjpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NDQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/chat-form/chat-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input \n    class=\"chatInput\" \n    [(ngModel)]=\"message\" \n    (keydown)=\"handleSubmit($event)\"\n    />\n\n<button class=\"chatButton\"(click)=send()>Send</button>\n\n"

/***/ }),

/***/ "./src/app/chat-form/chat-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.ts ***!
  \**************************************************/
/*! exports provided: ChatFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatFormComponent", function() { return ChatFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");



var ChatFormComponent = /** @class */ (function () {
    function ChatFormComponent(chat) {
        this.chat = chat;
    }
    ChatFormComponent.prototype.ngOnInit = function () {
    };
    ChatFormComponent.prototype.send = function () {
        this.chat.sendMessage(this.message);
        this.message = '';
    };
    ChatFormComponent.prototype.handleSubmit = function (event) {
        if (event.keyCode === 13) {
            this.send();
        }
    };
    ChatFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-form',
            template: __webpack_require__(/*! ./chat-form.component.html */ "./src/app/chat-form/chat-form.component.html"),
            styles: [__webpack_require__(/*! ./chat-form.component.css */ "./src/app/chat-form/chat-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], ChatFormComponent);
    return ChatFormComponent;
}());



/***/ }),

/***/ "./src/app/chat.service.ts":
/*!*********************************!*\
  !*** ./src/app/chat.service.ts ***!
  \*********************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth.js");




var ChatService = /** @class */ (function () {
    function ChatService(db, afAuth) {
        var _this = this;
        this.db = db;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(function (auth) {
            if (auth !== undefined && auth !== null) {
                _this.user = auth;
            }
            _this.getUser().subscribe(function (a) {
                _this.userName = a.displayName;
            });
        });
    }
    ChatService.prototype.getUser = function () {
        var userId = this.user.uid;
        var path = "/users/" + userId;
        return this.db.object(path);
    };
    ChatService.prototype.getUsers = function () {
        var path = '/users';
        return this.db.list(path);
    };
    ChatService.prototype.sendMessage = function (msg) {
        var timestamp = this.getTimeStamp();
        var email = this.user.email;
        this.chatMessages = this.getMessages();
        this.chatMessages.push({
            message: msg,
            timeSent: timestamp,
            userName: this.userName,
            email: email
        });
        console.log('Called sendMessage() !');
    };
    ChatService.prototype.getMessages = function () {
        console.log('calls');
        // query to create our message feed binding
        return this.db.list('messages', {
            query: {
                limitToLast: 25,
                orderByKey: true
            }
        });
    };
    ChatService.prototype.getTimeStamp = function () {
        var now = new Date();
        var date = now.getUTCFullYear() + '/' +
            (now.getUTCMonth() + 1) + '/' +
            now.getUTCDate();
        var time = now.getUTCHours() + ':' +
            now.getUTCMinutes() + ':' +
            now.getUTCSeconds();
        return (date + ' ' + time);
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/chatroom/chatroom.component.css":
/*!*************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainContent{\r\n    display: flex;\r\n}\r\n\r\n.userListWrapper {\r\n    background-color: #2A2845;\r\n    color: #fff;\r\n    display: flex;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 1.2em;\r\n    flex: 1;\r\n    order: 1;\r\n    padding:20px 0px 40px 30px;\r\n    border-right: 1px solid #222;\r\n}\r\n\r\n.feedWrapper {\r\n    background-color: #fff;\r\n    background: \r\n        linear-gradient(181deg, rgba(100,200,255,0.6), rgba(0, 0, 0, 0.9)),\r\n        url('5.jpg') center center no-repeat;;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 1.2em;\r\n    flex: 5;\r\n    order: 2;\r\n    overflow-y: scroll;\r\n    padding:20px 0px 0px 24px;\r\n}\r\n\r\n.chatFormWrapper {\r\n    display: flex;\r\n    height: 50px;\r\n    background-color: #eee;\r\n    z-index: 3;\r\n}\r\n\r\n#scroll-style::-webkit-scrollbar-track\r\n{\r\n\tborder-radius: 10px;\r\n\tbackground-color: #F5F5F5;\r\n}\r\n\r\napp-user-list {\r\n    width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHJvb20vY2hhdHJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7Q0FDakI7O0FBRUQ7SUFDSSwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGNBQWM7SUFDZCxxQ0FBcUM7SUFDckMsaUJBQWlCO0lBQ2pCLFFBQVE7SUFDUixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLDZCQUE2QjtDQUNoQzs7QUFFRDtJQUNJLHVCQUF1QjtJQUN2Qjs7NkNBRXNEO0lBQ3RELHFDQUFxQztJQUNyQyxpQkFBaUI7SUFDakIsUUFBUTtJQUNSLFNBQVM7SUFDVCxtQkFBbUI7SUFDbkIsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsV0FBVztDQUNkOztBQUVEOztDQUVDLG9CQUFvQjtDQUNwQiwwQkFBMEI7Q0FDMUI7O0FBRUQ7SUFDSSxZQUFZO0NBQ2YiLCJmaWxlIjoic3JjL2FwcC9jaGF0cm9vbS9jaGF0cm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5Db250ZW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnVzZXJMaXN0V3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkEyODQ1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDEuMmVtO1xyXG4gICAgZmxleDogMTtcclxuICAgIG9yZGVyOiAxO1xyXG4gICAgcGFkZGluZzoyMHB4IDBweCA0MHB4IDMwcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMjIyO1xyXG59XHJcblxyXG4uZmVlZFdyYXBwZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQ6IFxyXG4gICAgICAgIGxpbmVhci1ncmFkaWVudCgxODFkZWcsIHJnYmEoMTAwLDIwMCwyNTUsMC42KSwgcmdiYSgwLCAwLCAwLCAwLjkpKSxcclxuICAgICAgICB1cmwoJy4uLy4uL2Fzc2V0cy81LmpwZycpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0OztcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZsZXg6IDU7XHJcbiAgICBvcmRlcjogMjtcclxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIHBhZGRpbmc6MjBweCAwcHggMHB4IDI0cHg7XHJcbn1cclxuXHJcbi5jaGF0Rm9ybVdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICB6LWluZGV4OiAzO1xyXG59XHJcblxyXG4jc2Nyb2xsLXN0eWxlOjotd2Via2l0LXNjcm9sbGJhci10cmFja1xyXG57XHJcblx0Ym9yZGVyLXJhZGl1czogMTBweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG59XHJcblxyXG5hcHAtdXNlci1saXN0IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/chatroom/chatroom.component.html":
/*!**************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContent\">\n    <div class=\"userListWrapper\">\n      <app-user-list></app-user-list>\n    </div>\n    <div #scroller class=\"feedWrapper\">\n      <app-feed></app-feed>\n    </div>\n  </div>\n  \n  <div class=\"chatFormWrapper\">\n    <app-chat-form></app-chat-form>\n  </div>"

/***/ }),

/***/ "./src/app/chatroom/chatroom.component.ts":
/*!************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.ts ***!
  \************************************************/
/*! exports provided: ChatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomComponent", function() { return ChatroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatroomComponent = /** @class */ (function () {
    function ChatroomComponent() {
    }
    ChatroomComponent.prototype.ngOnInit = function () {
    };
    ChatroomComponent.prototype.scrollToBottom = function () {
        this.feedContainer.nativeElement.scrollTop
            = this.feedContainer.nativeElement.scrollHeight;
    };
    ChatroomComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scroller'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatroomComponent.prototype, "feedContainer", void 0);
    ChatroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatroom',
            template: __webpack_require__(/*! ./chatroom.component.html */ "./src/app/chatroom/chatroom.component.html"),
            styles: [__webpack_require__(/*! ./chatroom.component.css */ "./src/app/chatroom/chatroom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatroomComponent);
    return ChatroomComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed.component.css":
/*!*****************************************!*\
  !*** ./src/app/feed/feed.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feed{\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.message{\r\n    flex-direction: column;\r\n    margin: 10px 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9mZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksdUJBQXVCO0lBQ3ZCLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9mZWVkL2ZlZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWVke1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5tZXNzYWdle1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/feed/feed.component.html":
/*!******************************************!*\
  !*** ./src/app/feed/feed.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"feed\">\n  <div *ngFor=\"let message of feed | async\" class=\"message\">\n    <app-message [chatMessage]=message></app-message>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");



var FeedComponent = /** @class */ (function () {
    function FeedComponent(chat) {
        this.chat = chat;
    }
    FeedComponent.prototype.ngOnInit = function () {
        console.log('feed');
        this.feed = this.chat.getMessages();
    };
    FeedComponent.prototype.ngOnChanges = function () {
        this.feed = this.chat.getMessages();
    };
    FeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.css */ "./src/app/feed/feed.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/logi-form/logi-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/logi-form/logi-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2ktZm9ybS9sb2dpLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/logi-form/logi-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/logi-form/logi-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logi-form works!\n</p>\n"

/***/ }),

/***/ "./src/app/logi-form/logi-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/logi-form/logi-form.component.ts ***!
  \**************************************************/
/*! exports provided: LogiFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogiFormComponent", function() { return LogiFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogiFormComponent = /** @class */ (function () {
    function LogiFormComponent() {
    }
    LogiFormComponent.prototype.ngOnInit = function () {
    };
    LogiFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logi-form',
            template: __webpack_require__(/*! ./logi-form.component.html */ "./src/app/logi-form/logi-form.component.html"),
            styles: [__webpack_require__(/*! ./logi-form.component.css */ "./src/app/logi-form/logi-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LogiFormComponent);
    return LogiFormComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-form/login-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    height: 100%;\r\n    overflow:hidden;\r\n    background: \r\n      linear-gradient(45deg, rgba(255,103,0,0.3), rgba(0, 0, 80, 0.9)),\r\n      url('6.jpg') center center no-repeat;;\r\n  }\r\n  \r\n  .loginCard{\r\n    display: block;\r\n    border: 1px solid #000;\r\n    border-radius: 4px;\r\n    background-color: rgba(255,255,255,0.85);\r\n    width: 700px;\r\n    height: 420px;\r\n    margin: auto;\r\n    margin-top: 40px;\r\n    text-align: center;\r\n    padding: 80px 30px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .formInput{\r\n    margin: auto;\r\n    margin-top: 16px;\r\n    display: block;\r\n    width: 60%;\r\n    height: 40px;\r\n    border-radius:4px;\r\n    background:#ecf0f1;\r\n    border: #ccc 1px solid;\r\n    padding: 8px;\r\n    font-size:1em;\r\n  }\r\n  \r\n  .btn{\r\n    height: 54px;\r\n    width: 60%;\r\n    margin: auto;\r\n    margin-top: 16px;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\r\n    transition: ease-in 0.2s;\r\n  }\r\n  \r\n  #btn-signUp{\r\n      background-color:#2A2845;\r\n  }\r\n  \r\n  #btn-signUp:hover{\r\n      background-color:#4A4865;\r\n      transition: ease-in 0.2s;\r\n  }\r\n  \r\n  #btn-login{\r\n      background-color:#4A4875;\r\n  }\r\n  \r\n  #btn-login:hover{\r\n      background-color:#5A5895;\r\n      transition: ease-in 0.2s;\r\n  }\r\n  \r\n  h2{\r\n      height: 2em;\r\n  }\r\n  \r\n  a {\r\n      text-decoration: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCOzsyQ0FFb0Q7R0FDckQ7O0VBRUQ7SUFDRSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5Q0FBeUM7SUFDekMsYUFBYTtJQUNiLGNBQWM7SUFDZCxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsbUVBQW1FO0lBQ25FLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGNBQWM7R0FDZjs7RUFFRDtJQUNFLGFBQWE7SUFDYixXQUFXO0lBQ1gsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUVBQW1FO0lBQ25FLHlCQUF5QjtHQUMxQjs7RUFFRDtNQUNJLHlCQUF5QjtHQUM1Qjs7RUFFRDtNQUNJLHlCQUF5QjtNQUN6Qix5QkFBeUI7R0FDNUI7O0VBRUQ7TUFDSSx5QkFBeUI7R0FDNUI7O0VBRUQ7TUFDSSx5QkFBeUI7TUFDekIseUJBQXlCO0dBQzVCOztFQUVEO01BQ0ksWUFBWTtHQUNmOztFQUVEO01BQ0ksc0JBQXNCO0dBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZDogXHJcbiAgICAgIGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSgyNTUsMTAzLDAsMC4zKSwgcmdiYSgwLCAwLCA4MCwgMC45KSksXHJcbiAgICAgIHVybCgnLi4vLi4vYXNzZXRzLzYuanBnJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7O1xyXG4gIH1cclxuICBcclxuICAubG9naW5DYXJke1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjg1KTtcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICAgIGhlaWdodDogNDIwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogODBweCAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xNyksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm1JbnB1dHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjRweDtcclxuICAgIGJhY2tncm91bmQ6I2VjZjBmMTtcclxuICAgIGJvcmRlcjogI2NjYyAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXNpemU6MWVtO1xyXG4gIH1cclxuICBcclxuICAuYnRue1xyXG4gICAgaGVpZ2h0OiA1NHB4O1xyXG4gICAgd2lkdGg6IDYwJTtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjE3KSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XHJcbiAgfVxyXG4gIFxyXG4gICNidG4tc2lnblVwe1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyQTI4NDU7XHJcbiAgfVxyXG4gIFxyXG4gICNidG4tc2lnblVwOmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0QTQ4NjU7XHJcbiAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcclxuICB9XHJcbiAgXHJcbiAgI2J0bi1sb2dpbntcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojNEE0ODc1O1xyXG4gIH1cclxuICBcclxuICAjYnRuLWxvZ2luOmhvdmVye1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiM1QTU4OTU7XHJcbiAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcclxuICB9XHJcbiAgXHJcbiAgaDJ7XHJcbiAgICAgIGhlaWdodDogMmVtO1xyXG4gIH1cclxuICBcclxuICBhIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"loginCard\">\n    <h2 class=\"heading\">Log In</h2>\n      <input \n        [(ngModel)]=\"email\"\n        type=\"email\" \n        name=\"email\" \n        class=\"formInput\" />\n      <input type=\"password\" \n        [(ngModel)]=\"password\"\n        name=\"password\" \n        class=\"formInput\" />\n      <button class=\"btn\" \n              id=\"btn-login\" \n              (click)=\"login()\">\n              Log In\n      </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        console.log('login() called from login-form component');
        this.authService.login(this.email, this.password)
            .catch(function (error) { return _this.errorMsg = error.message; });
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login-form/login-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messageContainer{\r\n    display: flex;\r\n    height: auto;\r\n    width: 70%;\r\n    min-width: 400px;\r\n    border-radius: 5px;\r\n    align-items:stretch;\r\n    background-color: #eee;\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.26), 0 3px 6px rgba(0,0,0,0.23);\r\n}\r\n\r\n.isOwnMessageContainer{\r\n    background-color: #01579B;\r\n}\r\n\r\n.messageData{\r\n    flex: 1;\r\n    padding: 10px;\r\n    font-size: 0.7em;\r\n}\r\n\r\n.sender{\r\n    display: block;\r\n    color: #222;\r\n    font-weight: bold;\r\n}\r\n\r\n.isOwnSender{\r\n    color: #E1F5FE;\r\n}\r\n\r\n.timestamp {\r\n    color: #555;\r\n    font-style: italic;\r\n}\r\n\r\n.isOwnTimestamp{\r\n    color: #4FC3F7;\r\n}\r\n\r\n.messageContent{\r\n    height: auto;\r\n    flex: 9;\r\n    background-color: #fff;\r\n    padding: 10px;\r\n    border-top-right-radius: 5px;\r\n    border-bottom-right-radius: 5px;\r\n}\r\n\r\n.isOwnMessageContent{\r\n    background-color: #E3F2FD;\r\n    color: #01579B;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2QsYUFBYTtJQUNiLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQix1QkFBdUI7SUFDdkIsbUVBQW1FO0NBQ3RFOztBQUVEO0lBQ0ksMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksUUFBUTtJQUNSLGNBQWM7SUFDZCxpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxZQUFZO0lBQ1osbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGFBQWE7SUFDYixRQUFRO0lBQ1IsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCw2QkFBNkI7SUFDN0IsZ0NBQWdDO0NBQ25DOztBQUVEO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7Q0FDbEIiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlQ29udGFpbmVye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtaW4td2lkdGg6IDQwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYWxpZ24taXRlbXM6c3RyZXRjaDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBib3gtc2hhZG93OiAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjI2KSwgMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4yMyk7XHJcbn1cclxuXHJcbi5pc093bk1lc3NhZ2VDb250YWluZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE1NzlCO1xyXG59XHJcblxyXG4ubWVzc2FnZURhdGF7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMC43ZW07XHJcbn1cclxuXHJcbi5zZW5kZXJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOiAjMjIyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5pc093blNlbmRlcntcclxuICAgIGNvbG9yOiAjRTFGNUZFO1xyXG59XHJcblxyXG4udGltZXN0YW1wIHtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xyXG59XHJcblxyXG4uaXNPd25UaW1lc3RhbXB7XHJcbiAgICBjb2xvcjogIzRGQzNGNztcclxufVxyXG5cclxuLm1lc3NhZ2VDb250ZW50e1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgZmxleDogOTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5pc093bk1lc3NhZ2VDb250ZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0UzRjJGRDtcclxuICAgIGNvbG9yOiAjMDE1NzlCO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"messageContainer\"\n    [ngClass]=\"{'isOwnMessageContainer':isOwnMessage}\">\n    <div class=\"messageData\"\n        [ngClass]=\"{'isOwnMessageData':isOwnMessage}\">\n        <span class=\"sender\"\n            [ngClass]=\"{'isOwnSender':isOwnMessage}\">\n            {{ userName }}\n        </span>\n        <span class=\"timestamp\" \n            [ngClass] = \"{'isOwnTimestamp':isOwnMessage}\">\n            {{ timeStamp | date:'medium' }}\n        </span>\n    </div>\n    <div class=\"messageContent\"\n        [ngClass]=\"{'isOwnMessageContent':isOwnMessage}\">\n        {{ messageContent }}\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _models_chat_message_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/chat-message.model */ "./src/app/models/chat-message.model.ts");




var MessageComponent = /** @class */ (function () {
    function MessageComponent(authService) {
        this.authService = authService;
        this.timeStamp = new Date();
        // authService.authUser().subscribe(user => {
        //   this.ownEmail = user.email;
        //   this.isOwnMessage = this.ownEmail === this.userEmail;
        // });
    }
    MessageComponent.prototype.ngOnInit = function (chatMessage) {
        if (chatMessage === void 0) { chatMessage = this.chatMessage; }
        this.messageContent = chatMessage.message;
        this.timeStamp = chatMessage.timeSent;
        this.userEmail = chatMessage.email;
        this.userName = chatMessage.userName;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_chat_message_model__WEBPACK_IMPORTED_MODULE_3__["ChatMessage"])
    ], MessageComponent.prototype, "chatMessage", void 0);
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/models/chat-message.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/chat-message.model.ts ***!
  \**********************************************/
/*! exports provided: ChatMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessage", function() { return ChatMessage; });
var ChatMessage = /** @class */ (function () {
    function ChatMessage() {
        this.timeSent = new Date();
    }
    return ChatMessage;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navBar{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    background-color: #EAEAEB;\r\n}\r\n\r\n#logo{\r\n    display: inline-block;\r\n    background: url('9.jpg') no-repeat;\r\n    background-size: cover;\r\n    margin: 12px 10px 12px 32px;\r\n    width: 60px;\r\n    height: 60px;\r\n    min-width: 60px;\r\n}\r\n\r\n#heading{\r\n    flex: 4;\r\n    padding: 24px 0px 8px 10px;\r\n    height: 60px;\r\n    font-size: 1.8em;\r\n    font-weight: bold;\r\n}\r\n\r\n.links{\r\n    padding-top: 32px;\r\n    padding-right: 30px;\r\n    white-space: nowrap;\r\n    display: block;\r\n}\r\n\r\n#heading > a{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n.links a{\r\n    color: #555;\r\n    text-decoration: none;\r\n    transition: ease-in 0.2s;\r\n    padding-right: 12px;\r\n    overflow: hidden;\r\n}\r\n\r\n.links a:hover {\r\n    color: #1E88E5;\r\n    transition: ease-in 0.2s;\r\n}\r\n\r\n#userEmail {\r\n    padding-right: 16px;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7SUFDZCxvQkFBb0I7SUFDcEIsMEJBQTBCO0NBQzdCOztBQUVEO0lBQ0ksc0JBQXNCO0lBQ3RCLG1DQUFnRDtJQUNoRCx1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksUUFBUTtJQUNSLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGtCQUFrQjtDQUNyQjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGVBQWU7Q0FDbEI7O0FBRUQ7SUFDSSxzQkFBc0I7SUFDdEIsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixpQkFBaUI7Q0FDcEI7O0FBRUQ7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksb0JBQW9CO0lBQ3BCLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZCYXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VBRUFFQjtcclxufVxyXG5cclxuI2xvZ297XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy85LmpwZycpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBtYXJnaW46IDEycHggMTBweCAxMnB4IDMycHg7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIG1pbi13aWR0aDogNjBweDtcclxufVxyXG5cclxuI2hlYWRpbmd7XHJcbiAgICBmbGV4OiA0O1xyXG4gICAgcGFkZGluZzogMjRweCAwcHggOHB4IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICBmb250LXNpemU6IDEuOGVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5saW5rc3tcclxuICAgIHBhZGRpbmctdG9wOiAzMnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI2hlYWRpbmcgPiBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubGlua3MgYXtcclxuICAgIGNvbG9yOiAjNTU1O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xyXG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5saW5rcyBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMUU4OEU1O1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xyXG59XHJcblxyXG4jdXNlckVtYWlsIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navBar\">\n  <div id=\"logo\"></div>\n  <div id=\"heading\"><a routerLink=\"/\">basechat</a></div>\n<div class=\"links\">\n  <span>\n    <a *ngIf=\"!(user|async)?.uid\" href=\"#\" (click)=\"login()\">Login</a>\n  </span>\n  <span>\n    <a *ngIf=\"!(user|async)?.uid\" routerLink=\"/signup\">Sign Up</a>\n  </span>\n  <span>\n    <span id=\"userEmail\" *ngIf=\"(user|async)?.uid\">Hello, {{userEmail}}</span>\n  </span>\n  <span>\n    <a *ngIf=\"(user|async)?.uid\" href=\"#\" (click)=\"logout()\">Logout</a>\n  </span>\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = this.authService.authUser();
        this.user.subscribe(function (user) {
            if (user) {
                _this.userEmail = user.email;
            }
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/signup-form/signup-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\r\n    overflow:hidden;\r\n    background: \r\n      linear-gradient(45deg, rgba(0,103, 255, 0.3), rgba(0, 150, 80, 0.9)),\r\n      url('7.jpg') center center no-repeat;;\r\n  }\r\n  \r\n  .signUpCard{\r\n    display: block;\r\n    border: 1px solid #000;\r\n    border-radius: 4px;\r\n    background-color: rgba(255,255,255,0.85);\r\n    width: 700px;\r\n    height: 520px;\r\n    margin: auto;\r\n    margin-top: 30px;\r\n    padding: 80px 30px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .formInput{\r\n    display: block;\r\n    width: 100%;\r\n    height: 40px;\r\n    border-radius:4px;\r\n    background:#ecf0f1;\r\n    border: #ccc 1px solid;\r\n    padding: 8px;\r\n    font-size:1em;\r\n    margin-bottom: 18px;\r\n  }\r\n  \r\n  .btn{\r\n    height: 54px;\r\n    margin-top: 32px;\r\n    border: none;\r\n    color: white;\r\n    padding: 15px 32px;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: 16px;\r\n    border-radius: 4px;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\r\n    transition: ease-in 0.2s;\r\n    width: 100%;\r\n  }\r\n  \r\n  #btn-signUp{\r\n      background-color:#2A2845;\r\n  }\r\n  \r\n  #btn-signUp:hover{\r\n      background-color:#4A4865;\r\n      transition: ease-in 0.2s;\r\n  }\r\n  \r\n  #btn-signUp:disabled{\r\n      background-color:#eee;\r\n      color: #999;\r\n  }\r\n  \r\n  h2{\r\n      text-align: center;\r\n      height: 2em;\r\n  }\r\n  \r\n  a {\r\n      text-decoration: none;\r\n  }\r\n  \r\n  .label{\r\n      font-size: 0.9em;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwLWZvcm0vc2lnbnVwLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQjs7MkNBRW9EO0dBQ3JEOztFQUVEO0lBQ0UsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsbUVBQW1FO0lBQ25FLGlCQUFpQjtHQUNsQjs7RUFFRDtJQUNFLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixjQUFjO0lBQ2Qsb0JBQW9CO0dBQ3JCOztFQUVEO0lBQ0UsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUVBQW1FO0lBQ25FLHlCQUF5QjtJQUN6QixZQUFZO0dBQ2I7O0VBRUQ7TUFDSSx5QkFBeUI7R0FDNUI7O0VBRUQ7TUFDSSx5QkFBeUI7TUFDekIseUJBQXlCO0dBQzVCOztFQUVEO01BQ0ksc0JBQXNCO01BQ3RCLFlBQVk7R0FDZjs7RUFFRDtNQUNJLG1CQUFtQjtNQUNuQixZQUFZO0dBQ2Y7O0VBRUQ7TUFDSSxzQkFBc0I7R0FDekI7O0VBRUQ7TUFDSSxpQkFBaUI7R0FDcEIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAtZm9ybS9zaWdudXAtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIGJhY2tncm91bmQ6IFxyXG4gICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMCwxMDMsIDI1NSwgMC4zKSwgcmdiYSgwLCAxNTAsIDgwLCAwLjkpKSxcclxuICAgICAgdXJsKCcuLi8uLi9hc3NldHMvNy5qcGcnKSBjZW50ZXIgY2VudGVyIG5vLXJlcGVhdDs7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWduVXBDYXJke1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjg1KTtcclxuICAgIHdpZHRoOiA3MDBweDtcclxuICAgIGhlaWdodDogNTIwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgcGFkZGluZzogODBweCAzMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xNyksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm1JbnB1dHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOjRweDtcclxuICAgIGJhY2tncm91bmQ6I2VjZjBmMTtcclxuICAgIGJvcmRlcjogI2NjYyAxcHggc29saWQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXNpemU6MWVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLmJ0bntcclxuICAgIGhlaWdodDogNTRweDtcclxuICAgIG1hcmdpbi10b3A6IDMycHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjE3KSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgI2J0bi1zaWduVXB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IzJBMjg0NTtcclxuICB9XHJcbiAgXHJcbiAgI2J0bi1zaWduVXA6aG92ZXJ7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IzRBNDg2NTtcclxuICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xyXG4gIH1cclxuICBcclxuICAjYnRuLXNpZ25VcDpkaXNhYmxlZHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjojZWVlO1xyXG4gICAgICBjb2xvcjogIzk5OTtcclxuICB9XHJcbiAgXHJcbiAgaDJ7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgaGVpZ2h0OiAyZW07XHJcbiAgfVxyXG4gIFxyXG4gIGEge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sYWJlbHtcclxuICAgICAgZm9udC1zaXplOiAwLjllbTtcclxuICB9XHJcbiAgIl19 */"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"signUpCard\">\n   <form #signupForm=\"ngForm\">\n    <h2 class=\"heading\">Sign Up</h2>\n\n    <label class=\"label\">Email</label>\n       <input \n       type=\"email\" name=\"email\"\n       placeholder=\"Enter your email address\" \n       [(ngModel)]=\"email\" class=\"formInput\"\n       maxlength=\"60\" required/>\n\n    <label class=\"label\">Password</label>\n      <input \n        type=\"password\" name=\"password\"\n        placeholder=\"Choose a password\" \n        [(ngModel)]=\"password\" class=\"formInput\" \n        required/>\n\n    <label class=\"label\">Display Name</label>\n      <input \n        name=\"displayName\"\n        placeholder=\"Enter a display name\" \n        [(ngModel)]=\"displayName\" class=\"formInput\"\n        maxlength=\"12\" required/>\n\n      <button [disabled]=\"!signupForm.form.valid\" \n              type=\"submit\" (click)=\"signUp()\"\n              class=\"btn\" id=\"btn-signUp\">\n              Sign Up\n      </button>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.ts ***!
  \******************************************************/
/*! exports provided: SignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return SignupFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth.service.ts");




var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    SignupFormComponent.prototype.signUp = function () {
        var _this = this;
        var email = this.email;
        var password = this.password;
        var displayName = this.displayName;
        this.authService.signUp(email, password, displayName)
            .then(function (resolve) { return _this.router.navigate(['chat']); })
            .catch(function (error) { return _this.errorMsg = error.message; });
    };
    SignupFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup-form',
            template: __webpack_require__(/*! ./signup-form.component.html */ "./src/app/signup-form/signup-form.component.html"),
            styles: [__webpack_require__(/*! ./signup-form.component.css */ "./src/app/signup-form/signup-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SignupFormComponent);
    return SignupFormComponent;
}());



/***/ }),

/***/ "./src/app/user-item/user-item.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-item/user-item.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userItem{\r\n    height: auto;\r\n    padding: 10px;\r\n    width: 90%;\r\n    margin-top: 10px;\r\n    border-radius: 1px;\r\n    align-items:flex-start;\r\n    background-color: #201835;\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    color: #A098A5;\r\n    border-radius: 8px;\r\n    transition: ease-in 0.2s;\r\n}\r\n\r\n.userItem:hover{\r\n    background-color: #453968;\r\n    color: #ddd;\r\n    transition: ease-in 0.1s;\r\n}\r\n\r\n.online{\r\n    background-color: #0FA;\r\n}\r\n\r\n.busy{\r\n    background-color: #FB0;\r\n}\r\n\r\n.offline{\r\n    background-color: #888;\r\n}\r\n\r\n.status{\r\n    border: 1px solid black;\r\n    display: inline-block;\r\n    min-width: 10px;\r\n    min-height: 10px;\r\n    border-radius: 50%;\r\n    margin: 10px 12px 0px 10px;\r\n}\r\n\r\n.userName{\r\n    display: inline-block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1pdGVtL3VzZXItaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsMEJBQTBCO0lBQzFCLG1FQUFtRTtJQUNuRSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHlCQUF5QjtDQUM1Qjs7QUFFRDtJQUNJLDBCQUEwQjtJQUMxQixZQUFZO0lBQ1oseUJBQXlCO0NBQzVCOztBQUVEO0lBQ0ksdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksdUJBQXVCO0NBQzFCOztBQUVEO0lBQ0ksd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQiwyQkFBMkI7Q0FDOUI7O0FBRUQ7SUFDSSxzQkFBc0I7Q0FDekIiLCJmaWxlIjoic3JjL2FwcC91c2VyLWl0ZW0vdXNlci1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlckl0ZW17XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwMTgzNTtcclxuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMTYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcclxuICAgIGNvbG9yOiAjQTA5OEE1O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xyXG59XHJcblxyXG4udXNlckl0ZW06aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDUzOTY4O1xyXG4gICAgY29sb3I6ICNkZGQ7XHJcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMXM7XHJcbn1cclxuXHJcbi5vbmxpbmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEZBO1xyXG59XHJcblxyXG4uYnVzeXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQjA7XHJcbn1cclxuXHJcbi5vZmZsaW5le1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzg4ODtcclxufVxyXG5cclxuLnN0YXR1c3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiAxMHB4O1xyXG4gICAgbWluLWhlaWdodDogMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbjogMTBweCAxMnB4IDBweCAxMHB4O1xyXG59XHJcblxyXG4udXNlck5hbWV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/user-item/user-item.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-item/user-item.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"userItem\">\n  <span class=\"status\" [ngClass]=(user.status)>\n  </span>\n  <span class=\"userName\">\n    {{user.displayName}}\n  </span>\n</div>"

/***/ }),

/***/ "./src/app/user-item/user-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-item/user-item.component.ts ***!
  \**************************************************/
/*! exports provided: UserItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserItemComponent", function() { return UserItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");



var UserItemComponent = /** @class */ (function () {
    function UserItemComponent() {
    }
    UserItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], UserItemComponent.prototype, "user", void 0);
    UserItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-item',
            template: __webpack_require__(/*! ./user-item.component.html */ "./src/app/user-item/user-item.component.html"),
            styles: [__webpack_require__(/*! ./user-item.component.css */ "./src/app/user-item/user-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserItemComponent);
    return UserItemComponent;
}());



/***/ }),

/***/ "./src/app/user-list/user-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-list/user-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-list/user-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-list/user-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"userList\">\n  <app-user-item\n  [user]=user *ngFor=\"let user of users\">\n  </app-user-item>\n</div>"

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chat.service */ "./src/app/chat.service.ts");



var UserListComponent = /** @class */ (function () {
    function UserListComponent(chat) {
        var _this = this;
        chat.getUsers().subscribe(function (users) {
            _this.users = users;
        });
    }
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/user-list/user-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDmmFUTFMAg2Uee5AGPHJedO1vhPqtTfWE",
        authDomain: "chatting-d62ed.firebaseapp.com",
        databaseURL: "https://chatting-d62ed.firebaseio.com",
        projectId: "chatting-d62ed",
        storageBucket: "chatting-d62ed.appspot.com",
        messagingSenderId: "880566017345"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/routes.ts":
/*!***********************!*\
  !*** ./src/routes.ts ***!
  \***********************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _app_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/signup-form/signup-form.component */ "./src/app/signup-form/signup-form.component.ts");
/* harmony import */ var _app_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _app_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/chatroom/chatroom.component */ "./src/app/chatroom/chatroom.component.ts");



var appRoutes = [
    { path: 'signup', component: _app_signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_0__["SignupFormComponent"] },
    { path: 'login', component: _app_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__["LoginFormComponent"] },
    { path: 'chat', component: _app_chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_2__["ChatroomComponent"] },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! G:\chatting\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map