(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/all-games/all-games.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/all-games/all-games.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-game *ngFor=\"let game of games, let i = index\" [image]=\"i\" [game]=\"game\"></app-game>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\r\n    <li role=\"presentation\" class=\"active\"><a href=\"#\">Home</a></li>\r\n    <li role=\"presentation\"><a href=\"#\">Games</a></li>\r\n    <li role=\"presentation\"><a href=\"#\">Categories</a></li>\r\n</ul>\r\n\r\n<div class=\"jumbotron\">\r\n    <h1>Good Game!</h1>\r\n    <p>Catching the trend and experiencing the best in the world of games!</p>\r\n</div>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/game/comment/comment.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/game/comment/comment.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"alert alert-info\" role=\"alert\">\r\n  <span id=\"rating-header\">Rating</span> \r\n  <app-rating [gameId]=gameId></app-rating>\r\n</div>\r\n\r\n<div class=\"alert alert-info\" role=\"alert\">Comments</div>\r\n\r\n<ul class=\"list-group\">\r\n  <li *ngFor=\"let comment of comments\" class=\"list-group-item\">{{comment}}</li>\r\n</ul>\r\n\r\n<div class=\"input-group\">\r\n  <span class=\"input-group-addon\" id=\"basic-addon1\" (click)=\"postComment(input.value)\">Click here</span>\r\n  <input #input type=\"text\" class=\"form-control\" placeholder=\"Please say you mind...\" aria-describedby=\"basic-addon1\">\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/game/game.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/game/game.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div [ngStyle]=\"{'margin-left':game === undefined ? '5%' : null }\">\r\n  <div class=\"col-xs-6 col-md-3\">\r\n    <div class=\"thumbnail\" style=\"width: 100%;\">\r\n      <img *ngIf=\"(image + 1) % 4 == 1\" src=\"../../assets/PUBG.jpg\">\r\n      <img *ngIf=\"(image + 1) % 4 == 2\" src=\"../../assets/dota.jpg\">\r\n      <img *ngIf=\"(image + 1) % 4 == 3\" src=\"../../assets/mario.jpg\">\r\n      <img *ngIf=\"(image + 1) % 4 == 0\" src=\"../../assets/fifa.jpg\">\r\n      <div class=\"caption\">\r\n        <h3>{{ name }}</h3>\r\n        <app-rating [rate]=rate></app-rating>\r\n        <p>{{ description }}</p>\r\n        <p>\r\n          <a *ngIf=\"game !== undefined\" href=\"#\" class=\"btn btn-primary\" role=\"button\" style=\"margin-right: 10px;\" routerLink=\"{{gameUrl}}\">Play game</a> \r\n          <a *ngIf=\"game !== undefined\" href=\"#\" class=\"btn btn-default\" role=\"button\"  routerLink=\"{{gameUrl}}\">Read more</a>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"game === undefined\" class=\"col-xs-6 col-md-6\">\r\n    <app-comment [comments]=\"comments\" [gameId]=\"id\"></app-comment>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/game/rating/rating.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/game/rating/rating.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span id=\"1\" (mouseover)=\"changeColor(1)\" (mouseout)=\"resetColor()\" (click)=\"onClick($event)\" class=\"fa fa-star star\" [ngClass]=\"color(1)\" \r\n  [ngStyle]=\"{'transform': gameId !== undefined ? 'scale(2)' : null}\"></span>\r\n<span id=\"2\" (mouseover)=\"changeColor(2)\" (mouseout)=\"resetColor()\" (click)=\"onClick($event)\" class=\"fa fa-star star\" [ngClass]=\"color(2)\"\r\n  [ngStyle]=\"{'transform': gameId !== undefined ? 'scale(2)' : null}\"></span>\r\n<span id=\"3\" (mouseover)=\"changeColor(3)\" (mouseout)=\"resetColor()\" (click)=\"onClick($event)\" class=\"fa fa-star star\" [ngClass]=\"color(3)\"\r\n[ngStyle]=\"{'transform': gameId !== undefined ? 'scale(2)' : null}\"></span>\r\n<span id=\"4\" (mouseover)=\"changeColor(4)\" (mouseout)=\"resetColor()\" (click)=\"onClick($event)\" class=\"fa fa-star star\" [ngClass]=\"color(4)\"\r\n  [ngStyle]=\"{'transform': gameId !== undefined ? 'scale(2)' : null}\"></span>\r\n<span id=\"5\" (mouseover)=\"changeColor(5)\" (mouseout)=\"resetColor()\" (click)=\"onClick($event)\" class=\"fa fa-star star\" [ngClass]=\"color(5)\"\r\n  [ngStyle]=\"{'transform': gameId !== undefined ? 'scale(2)' : null}\"></span>\r\n"

/***/ }),

/***/ "./src/app/all-games/all-games.component.css":
/*!***************************************************!*\
  !*** ./src/app/all-games/all-games.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FsbC1nYW1lcy9hbGwtZ2FtZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/all-games/all-games.component.ts":
/*!**************************************************!*\
  !*** ./src/app/all-games/all-games.component.ts ***!
  \**************************************************/
/*! exports provided: AllGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllGamesComponent", function() { return AllGamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fecth_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fecth-data.service */ "./src/app/fecth-data.service.ts");



let AllGamesComponent = class AllGamesComponent {
    constructor(fetchDataService) {
        this.fetchDataService = fetchDataService;
    }
    ngOnInit() {
        this.fetchDataService.getAllGames()
            .then(data => this.games = data).
            catch(error => {
            console.log(error);
            this.games = [
                {
                    name: 'Error',
                    description: 'error'
                }
            ];
        });
    }
};
AllGamesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-games',
        template: __webpack_require__(/*! raw-loader!./all-games.component.html */ "./node_modules/raw-loader/index.js!./src/app/all-games/all-games.component.html"),
        styles: [__webpack_require__(/*! ./all-games.component.css */ "./src/app/all-games/all-games.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fecth_data_service__WEBPACK_IMPORTED_MODULE_2__["FecthDataService"]])
], AllGamesComponent);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _all_games_all_games_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./all-games/all-games.component */ "./src/app/all-games/all-games.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");






const routes = [
    { path: '', component: _all_games_all_games_component__WEBPACK_IMPORTED_MODULE_4__["AllGamesComponent"] },
    { path: 'games/:id', component: _game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".jumbotron {\r\n    padding-left: 35px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5qdW1ib3Ryb24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() { }
    ngOnInit() { }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _all_games_all_games_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./all-games/all-games.component */ "./src/app/all-games/all-games.component.ts");
/* harmony import */ var _game_comment_comment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./game/comment/comment.component */ "./src/app/game/comment/comment.component.ts");
/* harmony import */ var _game_rating_rating_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./game/rating/rating.component */ "./src/app/game/rating/rating.component.ts");










let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _game_game_component__WEBPACK_IMPORTED_MODULE_5__["GameComponent"],
            _all_games_all_games_component__WEBPACK_IMPORTED_MODULE_7__["AllGamesComponent"],
            _game_comment_comment_component__WEBPACK_IMPORTED_MODULE_8__["CommentComponent"],
            _game_rating_rating_component__WEBPACK_IMPORTED_MODULE_9__["RatingComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/fecth-data.service.ts":
/*!***************************************!*\
  !*** ./src/app/fecth-data.service.ts ***!
  \***************************************/
/*! exports provided: FecthDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FecthDataService", function() { return FecthDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let FecthDataService = class FecthDataService {
    constructor(http) {
        this.http = http;
    }
    getAllGames() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers = headers.append('Access-Control-Allow-Origin', '*');
            // const data = await this.http.get('./assets/apiTest.json', { headers }).toPromise();
            const data = yield this.http.get('http://35.246.141.86:5000/api/games', { headers }).toPromise();
            return data;
        });
    }
    getGame(id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            // đây là id của game. ông chỉ cần lấy id nay ra bỏ vô url bên dưới là ok.
            // Format json file ông xem theo 2 file json trong folder asset la ok nhe.
            // với lại description trong từng game dc thì ông cho dài hơn description trong trang chính nhe.
            // bấm vô read more hoặc play game là ông se navigate vô từng game.
            // nhớ chỉnh Url cho cả 2 services get all với get game
            console.log('id: ' + id);
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            headers = headers.append('Access-Control-Allow-Origin', '*');
            // const data = await this.http.get('./assets/apiTest.1.json', { headers }).toPromise();
            const data = yield this.http.get(`http://35.246.141.86:5000/api/games/${id}`, { headers }).toPromise();
            return data;
            // return null;
        });
    }
    postComment(id, comment) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            // Nếu cần header thì ông chỉnh ở đây
            // headers = headers.append('Access-Control-Allow-Origin', '*');
            console.log('game id: ' + id);
            console.log('comment: ' + comment);
            // ông muốn post cái gì thì ghi vào đây
            const postObject = {
                id: id,
                comment: comment
            };
            const data = yield this.http.put(`http://35.246.141.86:5000/api/games/${id}`, postObject).toPromise();
            return data;
            // return null;
        });
    }
    postRating(id, rating) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
            // Nếu cần header thì ông chỉnh ở đây
            // headers = headers.append('Access-Control-Allow-Origin', '*');
            console.log('game id: ' + id);
            console.log('rating: ' + rating);
            // ông muốn post cái gì thì ghi vào đây
            const postObject = {
                id: id,
                rating: rating
            };
            const data = yield this.http.put(`http://35.246.141.86:5000/api/games/${id}`, postObject).toPromise();
            return data;
        });
    }
};
FecthDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], FecthDataService);



/***/ }),

/***/ "./src/app/game/comment/comment.component.css":
/*!****************************************************!*\
  !*** ./src/app/game/comment/comment.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#rating-header {\r\n    margin-right: 20px;\r\n}\r\n\r\n.input-group {\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.input-group-addon {\r\n    background-color: rgb(22, 54, 240);\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9jb21tZW50L2NvbW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9nYW1lL2NvbW1lbnQvY29tbWVudC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3JhdGluZy1oZWFkZXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmlucHV0LWdyb3VwLWFkZG9uIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMiwgNTQsIDI0MCk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/game/comment/comment.component.ts":
/*!***************************************************!*\
  !*** ./src/app/game/comment/comment.component.ts ***!
  \***************************************************/
/*! exports provided: CommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentComponent", function() { return CommentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fecth_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fecth-data.service */ "./src/app/fecth-data.service.ts");



let CommentComponent = class CommentComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
        // if (this.comments === null || this.comments === undefined) {
        //   this.comments = [];
        // } 
        console.log(this.comments);
    }
    postComment(comment) {
        console.log(this.comments);
        this.service.postComment(this.gameId, comment)
            .then(data => {
            if (this.comments === null || this.comments === undefined) {
                this.comments = [];
            }
            console.log(data);
            // push to update
            this.comments.push(comment);
        })
            .catch(error => console.error(error));
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CommentComponent.prototype, "comments", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], CommentComponent.prototype, "gameId", void 0);
CommentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-comment',
        template: __webpack_require__(/*! raw-loader!./comment.component.html */ "./node_modules/raw-loader/index.js!./src/app/game/comment/comment.component.html"),
        styles: [__webpack_require__(/*! ./comment.component.css */ "./src/app/game/comment/comment.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fecth_data_service__WEBPACK_IMPORTED_MODULE_2__["FecthDataService"]])
], CommentComponent);



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\r\n    display: block;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvZ2FtZS9nYW1lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _fecth_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fecth-data.service */ "./src/app/fecth-data.service.ts");




let GameComponent = class GameComponent {
    constructor(route, router, fetchGame) {
        this.route = route;
        this.router = router;
        this.fetchGame = fetchGame;
    }
    ngOnInit() {
        if (this.game === undefined) {
            const id = this.route.snapshot.params.id;
            this.fetchGame.getGame(id).then(game => {
                this.id = game[0]['id'];
                this.name = game[0]['name'];
                this.description = game[0]['description'];
                this.comments = game[0]['comment'];
                this.image = game[0]['id'];
                this.rate = game[0]['rate'];
            });
        }
        else {
            this.name = this.game.name;
            this.description = this.game.description;
            this.id = this.game.id.toLocaleString();
            this.gameUrl = '/games/' + this.id;
            this.rate = this.game.rate;
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], GameComponent.prototype, "game", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], GameComponent.prototype, "image", void 0);
GameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-game',
        template: __webpack_require__(/*! raw-loader!./game.component.html */ "./node_modules/raw-loader/index.js!./src/app/game/game.component.html"),
        styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _fecth_data_service__WEBPACK_IMPORTED_MODULE_3__["FecthDataService"]])
], GameComponent);



/***/ }),

/***/ "./src/app/game/rating/rating.component.css":
/*!**************************************************!*\
  !*** ./src/app/game/rating/rating.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".checked {\r\n    color: orange;\r\n}\r\n\r\n.star {\r\n  margin-right: 15px;\r\n}\r\n\r\n.star:hover {\r\n  cursor: pointer;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZ2FtZS9yYXRpbmcvcmF0aW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2dhbWUvcmF0aW5nL3JhdGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoZWNrZWQge1xyXG4gICAgY29sb3I6IG9yYW5nZTtcclxufVxyXG5cclxuLnN0YXIge1xyXG4gIG1hcmdpbi1yaWdodDogMTVweDtcclxufVxyXG5cclxuLnN0YXI6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/game/rating/rating.component.ts":
/*!*************************************************!*\
  !*** ./src/app/game/rating/rating.component.ts ***!
  \*************************************************/
/*! exports provided: RatingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RatingComponent", function() { return RatingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _fecth_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../fecth-data.service */ "./src/app/fecth-data.service.ts");



let RatingComponent = class RatingComponent {
    constructor(service) {
        this.service = service;
    }
    ngOnInit() {
    }
    color(id) {
        if (this.gameId !== undefined) {
            return id <= this.fakeRate ? 'checked' : null;
        }
        else {
            return id <= this.rate ? 'checked' : null;
        }
    }
    changeColor(id) {
        this.fakeRate = id;
    }
    resetColor() {
        this.fakeRate = null;
    }
    onClick(event) {
        if (this.gameId !== undefined) {
            this.service.postRating(this.gameId, this.fakeRate)
                .then(res => {
                console.log(res);
                this.rate = this.fakeRate;
            });
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RatingComponent.prototype, "rate", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
], RatingComponent.prototype, "gameId", void 0);
RatingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-rating',
        template: __webpack_require__(/*! raw-loader!./rating.component.html */ "./node_modules/raw-loader/index.js!./src/app/game/rating/rating.component.html"),
        styles: [__webpack_require__(/*! ./rating.component.css */ "./src/app/game/rating/rating.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_fecth_data_service__WEBPACK_IMPORTED_MODULE_2__["FecthDataService"]])
], RatingComponent);



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
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! Z:\Workplace\LCSS\front-end\LCSS\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map