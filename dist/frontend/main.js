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

/***/ "./src/app/address/address.component.html":
/*!************************************************!*\
  !*** ./src/app/address/address.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"address\">\n  <div class=\"container p-5\">\n    <h4 class=\"display-4\">My Shipping Address</h4>\n    <hr />\n    <app-message></app-message>\n    <div *ngIf=\"!currentAddress\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <div *ngIf=\"currentAddress\" class=\"card bg-light\">\n      <div class=\"card-body\">\n        <form>\n          <div class=\"form-group\">\n            <label>Address 1</label>\n            <input\n              type=\"text\"\n              name=\"address1\"\n              class=\"form-control\"\n              [(ngModel)]=\"currentAddress.addr1\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label>Address 2</label>\n            <input\n              type=\"text\"\n              name=\"address2\"\n              class=\"form-control\"\n              [(ngModel)]=\"currentAddress.addr2\"\n            />\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label>City</label>\n                <input\n                  type=\"text\"\n                  name=\"city\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"currentAddress.city\"\n                />\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label>State</label>\n                <input\n                  type=\"text\"\n                  name=\"state\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"currentAddress.state\"\n                />\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <label>Postal Code</label>\n                <input\n                  type=\"text\"\n                  name=\"city\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"currentAddress.postalCode\"\n                />\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label>Country</label>\n            <input\n              type=\"text\"\n              name=\"country\"\n              class=\"form-control\"\n              [(ngModel)]=\"currentAddress.country\"\n            />\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-danger\"\n            (click)=\"updateAddress()\"\n            [disabled]=\"btnDisabled\"\n          >\n            Change Address\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/address/address.component.scss":
/*!************************************************!*\
  !*** ./src/app/address/address.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/address/address.component.ts":
/*!**********************************************!*\
  !*** ./src/app/address/address.component.ts ***!
  \**********************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");




var AddressComponent = /** @class */ (function () {
    function AddressComponent(dataService, restService) {
        this.dataService = dataService;
        this.restService = restService;
        this.btnDisabled = false;
    }
    AddressComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.get("/api/accounts/address").subscribe(function (data) {
            if (JSON.stringify(data["address"]) === "{}" &&
                _this.dataService.message === "") {
                _this.dataService.warning("You have not entered your shipping address. Please enter your shipping address.");
            }
            _this.currentAddress = data["address"];
        }, function (error) {
            _this.dataService.error(error["message"]);
        });
    };
    AddressComponent.prototype.updateAddress = function () {
        var _this = this;
        this.btnDisabled = true;
        this.restService
            .post("/api/accounts/address", this.currentAddress)
            .subscribe(function (res) {
            res["success"]
                ? (_this.dataService.success(res["message"]),
                    _this.dataService.getProfile())
                : _this.dataService.error(res["message"]);
        }, function (error) {
            _this.dataService.error(error["message"]);
        }, function () {
            _this.btnDisabled = false;
        });
    };
    AddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-address",
            template: __webpack_require__(/*! ./address.component.html */ "./src/app/address/address.component.html"),
            styles: [__webpack_require__(/*! ./address.component.scss */ "./src/app/address/address.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"]])
    ], AddressComponent);
    return AddressComponent;
}());



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
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./address/address.component */ "./src/app/address/address.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _portproduct_portproduct_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./portproduct/portproduct.component */ "./src/app/portproduct/portproduct.component.ts");
/* harmony import */ var _my_products_my_products_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./my-products/my-products.component */ "./src/app/my-products/my-products.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");

















var routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    {
        path: "categories",
        children: [
            { path: "", component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_10__["CategoriesComponent"] },
            { path: ":id", component: _category_category_component__WEBPACK_IMPORTED_MODULE_13__["CategoryComponent"] }
        ]
    },
    {
        path: "register",
        component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"],
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
    },
    { path: "cart", component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_16__["CartComponent"] },
    { path: "search", component: _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"] },
    { path: "product/:id", component: _product_product_component__WEBPACK_IMPORTED_MODULE_14__["ProductComponent"] },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    {
        path: "profile",
        canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            { path: "", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"] },
            { path: "settings", component: _settings_settings_component__WEBPACK_IMPORTED_MODULE_8__["SettingsComponent"] },
            { path: "address", component: _address_address_component__WEBPACK_IMPORTED_MODULE_9__["AddressComponent"] },
            { path: "postproduct", component: _portproduct_portproduct_component__WEBPACK_IMPORTED_MODULE_11__["PortproductComponent"] },
            { path: "myproducts", component: _my_products_my_products_component__WEBPACK_IMPORTED_MODULE_12__["MyProductsComponent"] }
        ]
    },
    { path: "**", redirectTo: "" }
];
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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-main\">\n  <div class=\"container-fluid\">\n    <a routerLink=\"/\" class=\"navbar-brand\">\n      <img src=\"./assets/img/logo.png\" alt=\"logo\" id=\"logo\" /> Amazono\n    </a>\n    <button class=\"navbar-toggler\" (click)=\"isCollapsed = !isCollapsed\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div\n      [ngbCollapse]=\"isCollapsed\"\n      style=\"align-items: left; margin-left: 50px;\"\n      class=\"collapse navbar-collapse flex-column\"\n      id=\"navbarNav\"\n    >\n      <div class=\"input-group w-75\">\n        <input\n          type=\"text\"\n          name=\"search\"\n          class=\"form-control\"\n          [(ngModel)]=\"searchTerm\"\n          (keyup.enter)=\"search()\"\n        />\n        <span id=\"searchBtn\" class=\"bg-warning\" (click)=\"search()\">\n          <i class=\"fa fa-search\"></i>\n        </span>\n      </div>\n      <div class=\"w-100\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\">\n            <a\n              (click)=\"collapse()\"\n              routerLink=\"/categories\"\n              routerLinkActive=\"active\"\n              class=\"nav-link\"\n              >Categories</a\n            >\n          </li>\n          <li\n            class=\"nav-item ml-0 ml-md-auto\"\n            ngbDropdown\n            #dropdown=\"ngbDropdown\"\n          >\n            <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\n              <i class=\"fa fa-user mr-1\"></i>\n              <span *ngIf=\"!token\">Accounts</span>\n              <span *ngIf=\"dataService.user\">{{ dataService.user.name }}</span>\n            </a>\n            <div ngbDropdownMenu class=\"dropdown-menu\">\n              <a\n                *ngIf=\"token\"\n                (click)=\"closeDropdown(dropdown); collapse()\"\n                routerLink=\"/profile\"\n                class=\"dropdown-item\"\n              >\n                <i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i> Profile\n              </a>\n              <a\n                *ngIf=\"!token\"\n                (click)=\"closeDropdown(dropdown); collapse()\"\n                routerLink=\"/login\"\n                class=\"dropdown-item\"\n              >\n                <i class=\"fa fa-key\" aria-hidden=\"true\"></i> Login\n              </a>\n              <a\n                *ngIf=\"token\"\n                (click)=\"closeDropdown(dropdown); collapse(); logout()\"\n                class=\"dropdown-item\"\n              >\n                <i class=\"fa fa-key\" aria-hidden=\"true\"></i> Logout\n              </a>\n              <a\n                *ngIf=\"!token\"\n                (click)=\"closeDropdown(dropdown); collapse()\"\n                routerLink=\"/register\"\n                class=\"dropdown-item\"\n              >\n                <i class=\"fa fa-group\" aria-hidden=\"true\"></i> Register\n              </a>\n            </div>\n          </li>\n          <li class=\"nav-item ml-0 ml-md-2\">\n            <a\n              (click)=\"collapse()\"\n              routerLink=\"/cart\"\n              routerLinkActive=\"active\"\n              class=\"nav-link\"\n            >\n              <i class=\"fa fa-shopping-cart mr-1\"></i>\n              Cart\n              <span\n                class=\"badge badge-warning ml-1\"\n                *ngIf=\"dataService.cartItems\"\n                >{{ dataService.cartItems }}</span\n              >\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<footer id=\"main-footer\" class=\"bg-main text-white mt-5 p-5\">\n  <div class=\"container\">\n    <p class=\"lead text-center\">\n      Copyright &copy; {{ time.getFullYear() }} Amazono\n    </p>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#searchBtn {\n  cursor: pointer;\n  border: none;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  border-top-right-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem; }\n\n#logo {\n  width: 50px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZDpcXE5vZGVqc1xcQW5ndWxhclxcYW1hem9uXFxmcm9udGVuZC9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdDQUFnQztFQUNoQyxtQ0FBbUMsRUFBQTs7QUFHckM7RUFDRSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VhcmNoQnRuIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHBhZGRpbmc6IDAuMzc1cmVtIDAuNzVyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwLjI1cmVtO1xyXG59XHJcblxyXG4jbG9nbyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuIl19 */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data.service */ "./src/app/data.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.searchTerm = "";
        this.isCollapsed = true;
        this.time = new Date();
        // console.log(this.dataService.user);
    }
    AppComponent.prototype.ngOnInit = function () {
        this.dataService.getProfile();
        this.dataService.cartItems = this.dataService.getCart().length;
    };
    Object.defineProperty(AppComponent.prototype, "token", {
        get: function () {
            return localStorage.getItem("token");
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.collapse = function () {
        this.isCollapsed = true;
    };
    AppComponent.prototype.closeDropdown = function (dropdown) {
        dropdown.close();
    };
    AppComponent.prototype.logout = function () {
        this.dataService.user = {};
        localStorage.clear();
        this.router.navigate([""]);
    };
    AppComponent.prototype.search = function () {
        if (this.searchTerm) {
            this.collapse();
            this.router.navigate(["search", { query: this.searchTerm }]);
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-root",
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _token_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./token.interceptor */ "./src/app/token.interceptor.ts");
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./auth.guard */ "./src/app/auth.guard.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _settings_settings_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./settings/settings.component */ "./src/app/settings/settings.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./address/address.component */ "./src/app/address/address.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _portproduct_portproduct_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./portproduct/portproduct.component */ "./src/app/portproduct/portproduct.component.ts");
/* harmony import */ var _my_products_my_products_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./my-products/my-products.component */ "./src/app/my-products/my-products.component.ts");
/* harmony import */ var _category_category_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./category/category.component */ "./src/app/category/category.component.ts");
/* harmony import */ var _product_product_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./product/product.component */ "./src/app/product/product.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ng-stripe-checkout */ "./node_modules/ng-stripe-checkout/index.js");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_9__["MessageComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_14__["ProfileComponent"],
                _settings_settings_component__WEBPACK_IMPORTED_MODULE_15__["SettingsComponent"],
                _address_address_component__WEBPACK_IMPORTED_MODULE_16__["AddressComponent"],
                _categories_categories_component__WEBPACK_IMPORTED_MODULE_17__["CategoriesComponent"],
                _portproduct_portproduct_component__WEBPACK_IMPORTED_MODULE_18__["PortproductComponent"],
                _my_products_my_products_component__WEBPACK_IMPORTED_MODULE_19__["MyProductsComponent"],
                _category_category_component__WEBPACK_IMPORTED_MODULE_20__["CategoryComponent"],
                _product_product_component__WEBPACK_IMPORTED_MODULE_21__["ProductComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_22__["SearchComponent"],
                _cart_cart_component__WEBPACK_IMPORTED_MODULE_24__["CartComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_23__["StripeCheckoutModule"]
            ],
            providers: [
                _auth_guard__WEBPACK_IMPORTED_MODULE_13__["AuthGuard"],
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
                    useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_12__["TokenInterceptor"],
                    multi: true
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.guard.ts":
/*!*******************************!*\
  !*** ./src/app/auth.guard.ts ***!
  \*******************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem("token")) {
            return state.url.startsWith("/profile")
                ? true
                : (this.router.navigate(["/"]), false);
        }
        else {
            return state.url.startsWith("/profile")
                ? (this.router.navigate(["/"]), false)
                : true;
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/cart/cart.component.html":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"cart\">\n  <div class=\"container-fluid p-5\">\n    <app-message></app-message>\n    <h3 *ngIf=\"!cartItems.length\" class=\"display-2 text-center mt-5\">\n      Cart is Empty\n    </h3>\n    <div *ngIf=\"cartItems.length\" class=\"row\">\n      <div class=\"col-md-9\">\n        <p class=\"lead font-weight-bold\">Shopping Cart</p>\n        <div class=\"row\">\n          <div class=\"offset-8 col-2 d-none d-md-block\">\n            <p>\n              <small class=\"text-muted\">Price</small>\n            </p>\n          </div>\n          <div class=\"col-2 d-none d-md-block\">\n            <p>\n              <small class=\"text-muted\">Quantity</small>\n            </p>\n          </div>\n        </div>\n        <hr class=\"mt-0\" />\n        <div\n          *ngFor=\"\n            let item of cartItems;\n            let i = index;\n            trackBy: trackByCartItems\n          \"\n          class=\"cartItem\"\n        >\n          <div class=\"row\">\n            <div class=\"col-4 col-md-2\">\n              <a routerLink=\"/product/{{ item._id }}\">\n                <img\n                  src=\"{{ item.image }}\"\n                  alt=\"productImage\"\n                  class=\"img-fluid img-thumbnail\"\n                />\n              </a>\n            </div>\n            <div class=\"col-5 col-md-6\">\n              <h5>\n                <a routerLink=\"/product/{{ item._id }}\">{{ item.title }}</a>\n              </h5>\n              <p class=\"m-0\">\n                <small class=\"text-muted\">{{ item.owner.name }}</small>\n              </p>\n              <p class=\"m-0\">\n                <small class=\"text-muted\">{{ item.category.name }}</small>\n              </p>\n              <a class=\"text-danger\" (click)=\"removeProduct(i, item)\">Delete</a>\n            </div>\n            <div class=\"col-1 col-md-2\">\n              <h6 class=\"font-weight-bold text-danger\">\n                {{ item.price | currency }}\n              </h6>\n            </div>\n            <div class=\"col-1 mt-5 mt-md-0 p-0\">\n              <input\n                type=\"number\"\n                class=\"form-control\"\n                min=\"1\"\n                max=\"99\"\n                [(ngModel)]=\"quantities[i]\"\n              />\n            </div>\n          </div>\n          <hr />\n        </div>\n        <h5 class=\"text-right\">\n          Total:\n          <span class=\"ml-1 font-weight-bold text-danger\">{{\n            cartTotal | currency\n          }}</span>\n        </h5>\n      </div>\n      <div class=\"col-md-3\">\n        <div class=\"card bg-light\">\n          <div class=\"card-body\">\n            <h5>\n              Total:\n              <span class=\"ml-1 font-weight-bold text-danger\">{{\n                cartTotal | currency\n              }}</span>\n            </h5>\n            <br />\n            <button\n              class=\"btn btn-warning btn-block\"\n              (click)=\"checkout()\"\n              [disabled]=\"btnDisabled\"\n            >\n              Checkout\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/cart/cart.component.scss":
/*!******************************************!*\
  !*** ./src/app/cart/cart.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n  -webkit-appearance: none;\n  margin: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9kOlxcTm9kZWpzXFxBbmd1bGFyXFxhbWF6b25cXGZyb250ZW5kL3NyY1xcYXBwXFxjYXJ0XFxjYXJ0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLHdCQUF3QjtFQUN4QixTQUFTLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dDo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbixcclxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-stripe-checkout */ "./node_modules/ng-stripe-checkout/index.js");






var CartComponent = /** @class */ (function () {
    function CartComponent(dataService, restService, stripeCheckoutLoader, router) {
        this.dataService = dataService;
        this.restService = restService;
        this.stripeCheckoutLoader = stripeCheckoutLoader;
        this.router = router;
        this.btnDisabled = false;
        this.quantities = [];
    }
    CartComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.stripeCheckoutLoader
            .createHandler({
            key: "pk_test_fm3f1nL7BFBmXMuLC5OawOPz",
            image: "assets/img/logo.png",
            locale: "auto",
            token: function (stripeToken) {
                var products;
                products = [];
                _this.cartItems.forEach(function (d, index) {
                    products.push({
                        product: d["_id"],
                        quantity: _this.quantities[index]
                    });
                });
                _this.restService
                    .post("/api/payment", {
                    totalPrice: _this.cartTotal,
                    products: products,
                    stripeToken: stripeToken
                })
                    .subscribe(function (data) {
                    data["success"]
                        ? (_this.dataService.clearCart(),
                            _this.dataService.success("Purchase Successful."))
                        : _this.dataService.error(data["message"]);
                }, function (error) {
                    _this.dataService.error(error["message"]);
                });
            }
        })
            .then(function (handler) {
            _this.stripeCheckoutHandler = handler;
        });
    };
    CartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cartItems.forEach(function (data) {
            _this.quantities.push(1);
        });
    };
    CartComponent.prototype.trackByCartItems = function (index, item) {
        return item._id;
    };
    Object.defineProperty(CartComponent.prototype, "cartItems", {
        get: function () {
            return this.dataService.getCart();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CartComponent.prototype, "cartTotal", {
        get: function () {
            var _this = this;
            var total = 0;
            this.cartItems.forEach(function (data, index) {
                total += data["price"] * _this.quantities[index];
            });
            return total;
        },
        enumerable: true,
        configurable: true
    });
    CartComponent.prototype.removeProduct = function (index, product) {
        this.quantities.splice(index, 1);
        this.dataService.removeFromCart(product);
    };
    CartComponent.prototype.validate = function () {
        var _this = this;
        if (!this.quantities.every(function (data) { return data > 0; })) {
            this.dataService.warning("Quantity cannot be less than one.");
        }
        else if (!localStorage.getItem("token")) {
            this.router.navigate(["/login"]).then(function () {
                _this.dataService.warning("You need to login before making a purchase.");
            });
        }
        else if (!this.dataService.user["address"]) {
            this.router.navigate(["/profile/address"]).then(function () {
                _this.dataService.warning("You need to login before making a purchase.");
            });
        }
        else {
            this.dataService.message = "";
            return true;
        }
    };
    CartComponent.prototype.checkout = function () {
        var _this = this;
        this.btnDisabled = true;
        try {
            if (this.validate()) {
                this.stripeCheckoutHandler.open({
                    name: "Amazono",
                    description: "Checkout Payment",
                    amount: this.cartTotal * 100,
                    closed: function () {
                        _this.btnDisabled = false;
                    }
                });
            }
            else {
                this.btnDisabled = false;
            }
        }
        catch (error) {
            this.dataService.error(error);
        }
    };
    CartComponent.prototype.onClickCancel = function () {
        // If the window has been opened, this is how you can close it:
        this.stripeCheckoutHandler.close();
    };
    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-cart",
            template: __webpack_require__(/*! ./cart.component.html */ "./src/app/cart/cart.component.html"),
            styles: [__webpack_require__(/*! ./cart.component.scss */ "./src/app/cart/cart.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"],
            ng_stripe_checkout__WEBPACK_IMPORTED_MODULE_5__["StripeCheckoutLoader"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"categories\">\n  <div class=\"container p-5\">\n    <app-message></app-message>\n    <h4 class=\"display-4\">Categories</h4>\n    <hr />\n    <div *ngIf=\"!categories\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <div *ngIf=\"categories\" class=\"list-group\">\n      <a\n        *ngFor=\"let category of categories\"\n        routerLink=\"/categories/{{ category._id }}\"\n        class=\"list-group-item list-group-item-action\"\n      >\n        {{ category.name }}\n      </a>\n    </div>\n    <hr style=\"margin-top: 15rem;\" />\n    <div class=\"card bg-light mt-5\">\n      <div class=\"card-body\">\n        <h4 class=\"card-title\">Add New Category</h4>\n        <hr />\n        <div class=\"form\">\n          <div class=\"form-group\">\n            <label>Category</label>\n            <input\n              type=\"text\"\n              name=\"newCategory\"\n              class=\"form-control\"\n              [(ngModel)]=\"newCategory\"\n            />\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-info\"\n            (click)=\"addCategory()\"\n            [disabled]=\"btnDisabled\"\n          >\n            Add Category\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/categories/categories.component.scss":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");




var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(dataService, restService) {
        this.dataService = dataService;
        this.restService = restService;
        this.newCategory = "";
        this.btnDisabled = false;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.get("/api/categories").subscribe(function (data) {
            data["success"]
                ? (_this.categories = data["categories"])
                : _this.dataService.error(data["message"]);
        }, function (error) {
            _this.dataService.error(error["message"]);
        });
    };
    CategoriesComponent.prototype.addCategory = function () {
        var _this = this;
        if (this.newCategory) {
            this.btnDisabled = true;
            this.restService
                .post("/api/categories", { name: this.newCategory })
                .subscribe(function (data) {
                data["success"]
                    ? _this.dataService.success(data["message"])
                    : _this.dataService.error(data["message"]);
            }, function (error) {
                _this.dataService.error(error["message"]);
            }, function () {
                _this.btnDisabled = false;
            });
        }
    };
    CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-categories",
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.scss */ "./src/app/categories/categories.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/category/category.component.html":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"category\">\n  <div class=\"container p-3 p-md-5\">\n    <app-message></app-message>\n    <div *ngIf=\"!category\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <h3\n      *ngIf=\"category && !category.products.length\"\n      class=\"display-2 text-center mt-5\"\n    >\n      No Products inside Category\n    </h3>\n    <div *ngIf=\"category && category.products.length\">\n      <p>\n        {{ lower }}-{{ upper }} of {{ category.totalProducts }} products in\n        {{ category.categoryName }}\n      </p>\n      <hr />\n      <div class=\"product\" *ngFor=\"let product of category.products\">\n        <div class=\"row\">\n          <div class=\"col-5 col-md-2\">\n            <a routerLink=\"/product/{{ product._id }}\">\n              <img\n                [src]=\"product.image\"\n                alt=\"productImage\"\n                class=\"img-fluid img-thumbnail\"\n              />\n            </a>\n          </div>\n          <div class=\"col-5 col-md-8\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-6\">\n                <h5>\n                  <a routerLink=\"/product/{{ product._id }}\">{{\n                    product.title\n                  }}</a>\n                </h5>\n                <p>\n                  <small class=\"text-muted\">{{ product.category.id }}</small>\n                </p>\n                <p>{{ product.price | currency }}</p>\n              </div>\n              <div class=\"col-md-6\"></div>\n            </div>\n          </div>\n        </div>\n        <hr />\n      </div>\n      <ngb-pagination\n        [collectionSize]=\"category.totalProducts\"\n        [pageSize]=\"10\"\n        [(page)]=\"page\"\n        (pageChange)=\"getProducts($event)\"\n      ></ngb-pagination>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/category/category.component.scss":
/*!**************************************************!*\
  !*** ./src/app/category/category.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3J5L2NhdGVnb3J5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/category/category.component.ts":
/*!************************************************!*\
  !*** ./src/app/category/category.component.ts ***!
  \************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");





var CategoryComponent = /** @class */ (function () {
    function CategoryComponent(dataService, route, restService) {
        this.dataService = dataService;
        this.route = route;
        this.restService = restService;
        this.page = 1;
    }
    CategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (res) {
            _this.categoryId = res["id"];
            _this.getProducts();
        });
    };
    Object.defineProperty(CategoryComponent.prototype, "lower", {
        get: function () {
            return 10 * (this.page - 1) + 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CategoryComponent.prototype, "upper", {
        get: function () {
            return Math.min(10 * this.page, this.category.totalProducts);
        },
        enumerable: true,
        configurable: true
    });
    CategoryComponent.prototype.getProducts = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (event) {
                    this.category = null;
                }
                this.restService
                    .get("/api/categories/" + this.categoryId + "?page=" + (this.page - 1))
                    .subscribe(function (data) {
                    data["success"]
                        ? (_this.category = data)
                        : _this.dataService.error(data["message"]);
                }, function (error) {
                    _this.dataService.error(error["message"]);
                });
                return [2 /*return*/];
            });
        });
    };
    CategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-category",
            template: __webpack_require__(/*! ./category.component.html */ "./src/app/category/category.component.html"),
            styles: [__webpack_require__(/*! ./category.component.scss */ "./src/app/category/category.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"]])
    ], CategoryComponent);
    return CategoryComponent;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/*!*********************************!*\
  !*** ./src/app/data.service.ts ***!
  \*********************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rest-api.service */ "./src/app/rest-api.service.ts");




var DataService = /** @class */ (function () {
    function DataService(router, restService) {
        var _this = this;
        this.router = router;
        this.restService = restService;
        this.message = "";
        this.messageType = "danger";
        this.cartItems = 0;
        this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.message = "";
            }
        });
    }
    DataService.prototype.error = function (message) {
        this.messageType = "danger";
        this.message = message;
    };
    DataService.prototype.success = function (message) {
        this.messageType = "success";
        this.message = message;
    };
    DataService.prototype.warning = function (message) {
        this.messageType = "warning";
        this.message = message;
    };
    DataService.prototype.getProfile = function () {
        var _this = this;
        if (localStorage.getItem("token")) {
            this.restService.get("/api/accounts/profile").subscribe(function (data) {
                _this.user = data["user"];
                // console.log(data["user"]);
            }, function (error) { return _this.error(error); });
        }
    };
    DataService.prototype.getCart = function () {
        var cart = localStorage.getItem("cart");
        return cart ? JSON.parse(cart) : [];
    };
    DataService.prototype.addToCart = function (item) {
        var cart = this.getCart();
        if (cart.find(function (data) { return JSON.stringify(data) === JSON.stringify(item); })) {
            return false;
        }
        else {
            cart.push(item);
            this.cartItems++;
            localStorage.setItem("cart", JSON.stringify(cart));
            return true;
        }
    };
    DataService.prototype.clearCart = function () {
        this.cartItems = 0;
        localStorage.setItem("cart", "[]");
    };
    DataService.prototype.removeFromCart = function (item) {
        var cart = this.getCart();
        if (cart.find(function (data) { return JSON.stringify(data) === JSON.stringify(item); })) {
            cart = cart.filter(function (data) { return JSON.stringify(data) !== JSON.stringify(item); });
            this.cartItems--;
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"home\">\n  <div class=\"container-fluid d-none d-md-block\">\n    <ngb-carousel>\n      <ng-template ngbSlide>\n        <img src=\"assets/img/image1.jpg\" alt=\"first\" class=\"item\" />\n      </ng-template>\n      <ng-template ngbSlide>\n        <img src=\"assets/img/image2.jpg\" alt=\"second\" class=\"item\" />\n      </ng-template>\n      <ng-template ngbSlide>\n        <img src=\"assets/img/image3.jpg\" alt=\"third\" class=\"item\" />\n      </ng-template>\n      <!-- <ng-template ngbSlide>\n        <img src=\"assets/img/image4.jpg\" alt=\"fourth\" class=\"item\" />\n      </ng-template>\n      <ng-template ngbSlide>\n        <img src=\"assets/img/image5.jpg\" alt=\"fifth\" class=\"item\" />\n      </ng-template> -->\n    </ngb-carousel>\n  </div>\n  <div class=\"container p-5\">\n    <app-message></app-message>\n    <p class=\"lead\">\n      <b>Recommended Deals: Last-Minute Deals</b>\n    </p>\n    <div class=\"row\">\n      <div *ngIf=\"!products\" class=\"m-auto\">\n        <h1 class=\"text-center display-3 mt-5\">\n          <i class=\"fa fa-spinner fa-spin\"></i>\n        </h1>\n      </div>\n      <div *ngFor=\"let product of products\" class=\"col-md-3 mb-5\">\n        <a routerLink=\"/product/{{ product._id }}\">\n          <div class=\"card bg-light\">\n            <img src=\"{{ product.image }}\" alt=\"product\" class=\"card-img-top\" />\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{ product.title }}</h5>\n              <p class=\"card-text\">{{ product.price | currency }}</p>\n            </div>\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ngb-carousel {\n  min-width: 1000px;\n  max-width: 1500px;\n  margin-left: auto;\n  margin-right: auto; }\n\n.item {\n  position: relative;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9kOlxcTm9kZWpzXFxBbmd1bGFyXFxhbWF6b25cXGZyb250ZW5kL3NyY1xcYXBwXFxob21lXFxob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxtQ0FBNkI7VUFBN0IsMkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuZ2ItY2Fyb3VzZWwge1xyXG4gIG1pbi13aWR0aDogMTAwMHB4O1xyXG4gIG1heC13aWR0aDogMTUwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLml0ZW0ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKCgtNTAlKSk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService, restService) {
        this.dataService = dataService;
        this.restService = restService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.get("/api/products").subscribe(function (data) {
            data["success"]
                ? (_this.products = data["products"])
                : _this.dataService.error("Could not fetch products.");
        }, function (error) {
            _this.dataService.error(error["message"]);
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-home",
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"loginPage\">\n  <div class=\"container p-5\">\n    <div class=\"row mt-5\">\n      <div class=\"col-lg-4 offset-lg-4\">\n        <app-message></app-message>\n        <div class=\"card bg-light\">\n          <div class=\"card-body\">\n            <h4 class=\"text-center\">Login</h4>\n            <hr />\n            <form>\n              <div class=\"form-group\">\n                <label>Email</label>\n                <input\n                  type=\"email\"\n                  name=\"email\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"email\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label>Password</label>\n                <input\n                  type=\"password\"\n                  name=\"password\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"password\"\n                />\n              </div>\n              <hr />\n              <button\n                type=\"button\"\n                class=\"btn btn-primary btn-block\"\n                (click)=\"login()\"\n                [disabled]=\"btnDisabled\"\n              >\n                Login\n              </button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, restService, dataService) {
        this.router = router;
        this.restService = restService;
        this.dataService = dataService;
        this.email = "";
        this.password = "";
        this.btnDisabled = false;
    }
    LoginComponent.prototype.ngOnInit = function () { };
    LoginComponent.prototype.validate = function () {
        if (this.email) {
            if (this.password) {
                return true;
            }
            else {
                this.dataService.error("Password is not entered");
            }
        }
        else {
            this.dataService.error("Email is not entered.");
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        if (this.validate()) {
            this.btnDisabled = true;
            this.restService
                .post("/api/accounts/login", {
                email: this.email,
                password: this.password
            })
                .subscribe(function (data) {
                if (data["success"]) {
                    localStorage.setItem("token", data["token"]);
                    _this.dataService.getProfile();
                    _this.router.navigate(["/"]);
                }
                else {
                    _this.dataService.error(data["message"]);
                }
            }, function (error) {
                _this.dataService.error(error["message"]);
            }, function () {
                _this.btnDisabled = false;
            });
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p *ngIf=\"dataService.message\">\n  <ngb-alert [type]=\"dataService.messageType\" [dismissible]=\"false\">\n    {{ dataService.message }}\n  </ngb-alert>\n</p>\n"

/***/ }),

/***/ "./src/app/message/message.component.scss":
/*!************************************************!*\
  !*** ./src/app/message/message.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lc3NhZ2UvbWVzc2FnZS5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var MessageComponent = /** @class */ (function () {
    function MessageComponent(dataService) {
        this.dataService = dataService;
    }
    MessageComponent.prototype.ngOnInit = function () { };
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-message",
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.scss */ "./src/app/message/message.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/my-products/my-products.component.html":
/*!********************************************************!*\
  !*** ./src/app/my-products/my-products.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"myProducts\">\n  <div class=\"container p-5\">\n    <app-message></app-message>\n    <div *ngIf=\"!products\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <h3 *ngIf=\"products && !products.length\" class=\"display-2 text-center mt-5\">\n      My Products is Empty\n    </h3>\n    <div *ngIf=\"products && products.length\" class=\"row\">\n      <div class=\"col\">\n        <h4 class=\"display-4\">My Products</h4>\n        <div class=\"row\">\n          <div class=\"offset-10 col-2 d-none d-md-block\">\n            <p>\n              <small class=\"text-muted\">Price</small>\n            </p>\n          </div>\n        </div>\n        <hr class=\"mt-0\" />\n        <div *ngFor=\"let product of products\" class=\"product\">\n          <div class=\"row\">\n            <div class=\"col-4 col-md-2\">\n              <a routerLink=\"/product/{{ product.id }}\">\n                <img\n                  src=\"{{ product.image }}\"\n                  alt=\"image\"\n                  class=\"img-fluid img-thumbnail\"\n                />\n              </a>\n            </div>\n            <div class=\"col-5 col-md-8\">\n              <h5>\n                <a routerLink=\"/product/{{ product.id }}\">{{\n                  product.title\n                }}</a>\n                <p class=\"m-0\">\n                  <small class=\"text-muted\">{{ product.category.name }}</small>\n                </p>\n              </h5>\n            </div>\n            <div class=\"col-2\">\n              <h6 class=\"font-weight-bold text-danger\">\n                {{ product.price | currency }}\n              </h6>\n            </div>\n          </div>\n          <hr />\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/my-products/my-products.component.scss":
/*!********************************************************!*\
  !*** ./src/app/my-products/my-products.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LXByb2R1Y3RzL215LXByb2R1Y3RzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/my-products/my-products.component.ts":
/*!******************************************************!*\
  !*** ./src/app/my-products/my-products.component.ts ***!
  \******************************************************/
/*! exports provided: MyProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyProductsComponent", function() { return MyProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");




var MyProductsComponent = /** @class */ (function () {
    function MyProductsComponent(dataService, restService) {
        this.dataService = dataService;
        this.restService = restService;
    }
    MyProductsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.get("/api/seller/products").subscribe(function (data) {
            data["success"]
                ? (_this.products = data["products"])
                : _this.dataService.error(data["message"]);
        }, function (error) {
            _this.dataService.error(error["message"]);
        });
    };
    MyProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-my-products",
            template: __webpack_require__(/*! ./my-products.component.html */ "./src/app/my-products/my-products.component.html"),
            styles: [__webpack_require__(/*! ./my-products.component.scss */ "./src/app/my-products/my-products.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"]])
    ], MyProductsComponent);
    return MyProductsComponent;
}());



/***/ }),

/***/ "./src/app/portproduct/portproduct.component.html":
/*!********************************************************!*\
  !*** ./src/app/portproduct/portproduct.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"postProduct\">\n  <div class=\"container p-5\">\n    <h4 class=\"display-4\">Post a Product for Sale</h4>\n    <hr />\n    <app-message></app-message>\n    <div *ngIf=\"!categories\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <div *ngIf=\"categories\" class=\"card bg-light\">\n      <div class=\"card-body\">\n        <form>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Title</label>\n            <input\n              type=\"text\"\n              name=\"title\"\n              class=\"form-control\"\n              [(ngModel)]=\"product.title\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Price</label>\n            <input\n              type=\"number\"\n              name=\"price\"\n              class=\"form-control\"\n              [(ngModel)]=\"product.price\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label>Category</label>\n            <select\n              name=\"categoryId\"\n              [(ngModel)]=\"product.categoryId\"\n              class=\"custom-select\"\n            >\n              <option\n                *ngFor=\"let category of categories\"\n                [value]=\"category._id\"\n              >\n                {{ category.name }}\n              </option>\n            </select>\n          </div>\n          <div class=\"form-group\">\n            <label>Description</label>\n            <textarea\n              class=\"form-control\"\n              name=\"description\"\n              rows=\"5\"\n              [(ngModel)]=\"product.description\"\n            ></textarea>\n          </div>\n          <div class=\"form-group\">\n            <label>Upload Image</label>\n            <input\n              type=\"file\"\n              class=\"form-control-file\"\n              accept=\"image/*\"\n              name=\"file\"\n              (change)=\"fileChange($event)\"\n            />\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-success\"\n            (click)=\"post()\"\n            [disabled]=\"btnDisabled\"\n          >\n            Post\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/portproduct/portproduct.component.scss":
/*!********************************************************!*\
  !*** ./src/app/portproduct/portproduct.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BvcnRwcm9kdWN0L3BvcnRwcm9kdWN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/portproduct/portproduct.component.ts":
/*!******************************************************!*\
  !*** ./src/app/portproduct/portproduct.component.ts ***!
  \******************************************************/
/*! exports provided: PortproductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortproductComponent", function() { return PortproductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var PortproductComponent = /** @class */ (function () {
    function PortproductComponent(dataService, restService, router) {
        this.dataService = dataService;
        this.restService = restService;
        this.router = router;
        this.product = {
            title: "",
            price: 0,
            categoryId: "",
            description: "",
            product_picture: null
        };
        this.btnDisabled = false;
    }
    PortproductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restService.get("/api/categories").subscribe(function (data) {
            data["success"]
                ? (_this.categories = data["categories"])
                : _this.dataService.error(data["message"]);
        }, function (error) {
            _this.dataService.error(error["message"]);
        });
    };
    PortproductComponent.prototype.validate = function (product) {
        if (product.title) {
            if (product.price) {
                if (product.categoryId) {
                    if (product.description) {
                        if (product.product_picture) {
                            return true;
                        }
                        else {
                            this.dataService.error("Please select product image.");
                        }
                    }
                    else {
                        this.dataService.error("Please enter description.");
                    }
                }
                else {
                    this.dataService.error("Please select category.");
                }
            }
            else {
                this.dataService.error("Please enter a price.");
            }
        }
        else {
            this.dataService.error("Please enter a title.");
        }
    };
    PortproductComponent.prototype.fileChange = function (event) {
        this.product.product_picture = event.target.files[0];
    };
    PortproductComponent.prototype.post = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var form, key;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.btnDisabled = true;
                if (this.validate(this.product)) {
                    form = new FormData();
                    for (key in this.product) {
                        if (this.product.hasOwnProperty(key)) {
                            if (key === "product_picture") {
                                form.append("product_picture", this.product.product_picture, this.product.product_picture.name);
                            }
                            else {
                                form.append(key, this.product[key]);
                            }
                        }
                    }
                    this.restService.post("/api/seller/products", form).subscribe(function (data) {
                        data["success"]
                            ? _this.router
                                .navigate(["/profile/myproducts"])
                                .then(function () { return _this.dataService.success(data["message"]); })
                                .catch(function (error) { return _this.dataService.error(error); })
                            : _this.dataService.error(data["message"]);
                    }, function (error) {
                        _this.dataService.error(error["message"]);
                    }, function () {
                        _this.btnDisabled = false;
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    PortproductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-portproduct",
            template: __webpack_require__(/*! ./portproduct.component.html */ "./src/app/portproduct/portproduct.component.html"),
            styles: [__webpack_require__(/*! ./portproduct.component.scss */ "./src/app/portproduct/portproduct.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PortproductComponent);
    return PortproductComponent;
}());



/***/ }),

/***/ "./src/app/product/product.component.html":
/*!************************************************!*\
  !*** ./src/app/product/product.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"product\">\n  <div class=\"container-fluid p-5\">\n    <app-message></app-message>\n    <div *ngIf=\"!product\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <div *ngIf=\"product\">\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <img\n            [src]=\"product.image\"\n            alt=\"productImage\"\n            class=\"image img-thumbnail\"\n          />\n        </div>\n        <div class=\"col-lg-5\">\n          <div class=\"row\">\n            <div class=\"col-6\">\n              <h4>{{ product.title }}</h4>\n              <p class=\"m-0\">\n                <small>by {{ product.owner.name }}</small>\n              </p>\n              <p class=\"m-0\">\n                <small class=\"text-muted\">{{ product.category.name }}</small>\n              </p>\n            </div>\n            <div class=\"col-6\">\n              <ngb-rating\n                [(rate)]=\"product.averageRating\"\n                [starTemplate]=\"t\"\n                [readonly]=\"true\"\n                max=\"5\"\n              ></ngb-rating>\n            </div>\n          </div>\n          <hr />\n          <p class=\"lead\">{{ product.description }}</p>\n        </div>\n        <div class=\"col-lg-3\">\n          <div class=\"card bg-light\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Price: {{ product.price | currency }}</h5>\n              <br />\n              <br />\n              <a (click)=\"addToCart()\" class=\"btn btn-warning btn-block\"\n                >Add to Cart</a\n              >\n            </div>\n          </div>\n        </div>\n      </div>\n      <div>\n        <div class=\"mt-5 ml-lg-5\">\n          <h4>Reviews</h4>\n          <hr />\n          <div class=\"reviews\">\n            <div *ngFor=\"let review of product.reviews\" class=\"review\">\n              <div class=\"p-3\">\n                <img\n                  [src]=\"review.owner.picture\"\n                  alt=\"\"\n                  width=\"75px\"\n                  class=\"rounded-circle\"\n                />\n                <p class=\"lead d-inline ml-3\">{{ review.owner.name }}</p>\n                <br />\n                <br />\n                <ngb-rating\n                  [(rate)]=\"review.rating\"\n                  [starTemplate]=\"t\"\n                  [readonly]=\"true\"\n                  max=\"5\"\n                ></ngb-rating>\n                <p class=\"ml-2 d-inline font-weight-bold\">{{ review.title }}</p>\n                <p class=\"mt-3\">{{ review.description }}</p>\n              </div>\n              <hr />\n            </div>\n            <div class=\"card bg-light my-5\">\n              <div class=\"card-body\">\n                <h4 class=\"card-title\">Add a review</h4>\n                <hr />\n                <div class=\"form\">\n                  <div class=\"form-group\">\n                    <label>Title</label>\n                    <input\n                      type=\"text\"\n                      name=\"title\"\n                      class=\"form-control\"\n                      [(ngModel)]=\"myReview.title\"\n                    />\n                  </div>\n                  <div class=\"form-group\">\n                    <label>Description</label>\n                    <textarea\n                      class=\"form-control\"\n                      rows=\"5\"\n                      name=\"description\"\n                      [(ngModel)]=\"myReview.description\"\n                    ></textarea>\n                  </div>\n                  <label>Rating</label>\n                  <br />\n                  <ngb-rating\n                    [(rate)]=\"myReview.rating\"\n                    [starTemplate]=\"t\"\n                    [readonly]=\"false\"\n                    max=\"5\"\n                  ></ngb-rating>\n                  <br />\n                  <br />\n                  <button\n                    type=\"button\"\n                    class=\"btn btn-info\"\n                    (click)=\"postReview()\"\n                    [disabled]=\"btnDisabled\"\n                  >\n                    Post Review\n                  </button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<ng-template #t let-fill=\"fill\">\n  <span *ngIf=\"fill === 100\" class=\"star full\">&#9733;</span>\n  <span *ngIf=\"fill === 0\" class=\"star\">&#9733;</span>\n  <span *ngIf=\"fill < 100 && fill > 0\" class=\"star\">\n    <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\n  </span>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/product/product.component.scss":
/*!************************************************!*\
  !*** ./src/app/product/product.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QvcHJvZHVjdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/product/product.component.ts":
/*!**********************************************!*\
  !*** ./src/app/product/product.component.ts ***!
  \**********************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");





var ProductComponent = /** @class */ (function () {
    function ProductComponent(route, dataService, restService, router) {
        this.route = route;
        this.dataService = dataService;
        this.restService = restService;
        this.router = router;
        this.myReview = {
            title: "",
            description: "",
            rating: 0
        };
        this.btnDisabled = false;
    }
    ProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (res) {
            _this.restService.get("/api/product/" + res["id"]).subscribe(function (data) {
                data["success"]
                    ? (_this.product = data["product"])
                    : _this.router.navigate(["/"]);
            }, function (error) { return _this.dataService.error(error["message"]); });
        });
    };
    ProductComponent.prototype.postReview = function () {
        var _this = this;
        this.btnDisabled = true;
        this.restService
            .post("/api/review", {
            productId: this.product._id,
            title: this.myReview.title,
            description: this.myReview.description,
            rating: this.myReview.rating
        })
            .subscribe(function (data) {
            data["success"]
                ? _this.dataService.success(data["message"])
                : _this.dataService.error(data["message"]);
        }, function (error) {
            _this.dataService.error(error["message"]);
        }, function () {
            _this.btnDisabled = false;
        });
    };
    ProductComponent.prototype.addToCart = function () {
        this.dataService.addToCart(this.product)
            ? this.dataService.success("Product successfully added to cart")
            : this.dataService.error("Product has already been added to cart");
    };
    ProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-product",
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product.component.html"),
            styles: [__webpack_require__(/*! ./product.component.scss */ "./src/app/product/product.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"profile\">\n  <div class=\"container p-5\">\n    <h4 class=\"display-4\">My Profile</h4>\n    <hr />\n    <div *ngIf=\"!dataService.user\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <div *ngIf=\"dataService.user\" class=\"row mt-5\">\n      <div class=\"col-md-3\">\n        <img\n          [src]=\"dataService.user.picture\"\n          alt=\"userimage\"\n          class=\"rounded-circle image\"\n        />\n      </div>\n      <div class=\"col-md-8 ml-3\">\n        <p id=\"name\" class=\"lead\">{{ dataService.user.name }}</p>\n        <a routerLink=\"/profile/orders\" class=\"btn btn-warning\">My Orders</a>\n        <br />\n        <br />\n        <a routerLink=\"/profile/settings\" class=\"btn btn-warning\"\n          >Change Account Settings</a\n        >\n        <br />\n        <br />\n        <a routerLink=\"/profile/address\" class=\"btn btn-warning\"\n          >Change Shipping Address</a\n        >\n        <br />\n        <br />\n        <div *ngIf=\"dataService.user.isSeller\">\n          <p class=\"lead\">Seller Actions</p>\n          <hr />\n          <div class=\"row\">\n            <div class=\"col-md-6 mb-3\">\n              <a\n                routerLink=\"/profile/postproduct\"\n                class=\"btn btn-outline-success btn-block\"\n                >Post Product for Sale</a\n              >\n            </div>\n            <div class=\"col-md-6\">\n              <a\n                routerLink=\"/profile/myproducts\"\n                class=\"btn btn-outline-info btn-block\"\n                >My Products</a\n              >\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#name {\n  font-size: 2rem; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9kOlxcTm9kZWpzXFxBbmd1bGFyXFxhbWF6b25cXGZyb250ZW5kL3NyY1xcYXBwXFxwcm9maWxlXFxwcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hbWUge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(dataService) {
        this.dataService = dataService;
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-profile",
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"registrationPage\">\n  <div class=\"container p-5\">\n    <div class=\"row mt-5\">\n      <div class=\"col-lg-4 offset-lg-4\">\n        <app-message></app-message>\n        <div class=\"card bg-light\">\n          <div class=\"card-body\">\n            <h4 class=\"text-center\">Registration</h4>\n            <hr />\n            <form>\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Name</label>\n                <input\n                  type=\"text\"\n                  name=\"name\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"name\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Email</label>\n                <input\n                  type=\"email\"\n                  name=\"email\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"email\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Password</label>\n                <input\n                  type=\"password\"\n                  name=\"password\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"password\"\n                />\n              </div>\n              <div class=\"form-group\">\n                <label class=\"form-control-label\">Confirm Password</label>\n                <input\n                  type=\"password\"\n                  name=\"password1\"\n                  class=\"form-control\"\n                  [(ngModel)]=\"password1\"\n                />\n              </div>\n              <div class=\"form-check\">\n                <label class=\"form-check-label\">\n                  <input\n                    type=\"checkbox\"\n                    name=\"isSeller\"\n                    class=\"form-check-input\"\n                    [(ngModel)]=\"isSeller\"\n                  />\n                  Register as Seller\n                </label>\n              </div>\n              <hr />\n              <button\n                type=\"button\"\n                class=\"btn btn-primary btn-block\"\n                (click)=\"register()\"\n                [disabled]=\"btnDisabled\"\n              >\n                Register\n              </button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/registration/registration.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(router, dataService, restService) {
        this.router = router;
        this.dataService = dataService;
        this.restService = restService;
        this.name = "";
        this.email = "";
        this.password = "";
        this.password1 = "";
        this.isSeller = false;
        this.btnDisabled = false;
    }
    RegistrationComponent.prototype.ngOnInit = function () { };
    RegistrationComponent.prototype.validate = function () {
        if (this.name) {
            if (this.email) {
                if (this.password) {
                    if (this.password1) {
                        if (this.password === this.password1) {
                            return true;
                        }
                        else {
                            this.dataService.error("Passwords do not match.");
                        }
                    }
                    else {
                        this.dataService.error("Confirmation Password is not entered");
                    }
                }
                else {
                    this.dataService.error("Password is not entered");
                }
            }
            else {
                this.dataService.error("Email is not entered.");
            }
        }
        else {
            this.dataService.error("Name is not entered.");
        }
    };
    RegistrationComponent.prototype.register = function () {
        var _this = this;
        if (this.validate()) {
            this.btnDisabled = true;
            this.restService
                .post("/api/accounts/signup", {
                name: this.name,
                email: this.email,
                password: this.password,
                isSeller: this.isSeller
            })
                .subscribe(function (data) {
                if (data["success"]) {
                    localStorage.setItem("token", data["token"]);
                    // this.dataService.success("Registration successful!");
                    _this.dataService.getProfile();
                    _this.router
                        .navigate(["profile/address"])
                        .then(function () {
                        _this.dataService.success("Registration successful! Please enter your shipping address below");
                    })
                        .catch(function (err) { return _this.dataService.error(err); });
                }
                else {
                    _this.dataService.error(data["message"]);
                }
            }, function (error) { return _this.dataService.error(error["message"]); }, function () {
                _this.btnDisabled = false;
            });
        }
    };
    RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-registration",
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/registration/registration.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/rest-api.service.ts":
/*!*************************************!*\
  !*** ./src/app/rest-api.service.ts ***!
  \*************************************/
/*! exports provided: RestApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestApiService", function() { return RestApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var RestApiService = /** @class */ (function () {
    function RestApiService(http) {
        this.http = http;
    }
    RestApiService.prototype.get = function (link) {
        return this.http.get(link);
    };
    RestApiService.prototype.post = function (link, body) {
        return this.http.post(link, body);
    };
    RestApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RestApiService);
    return RestApiService;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"search\">\n  <div class=\"container p-3 p-md-5\">\n    <app-message></app-message>\n    <div *ngIf=\"!content\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <h3 *ngIf=\"content && !content.nbHits\" class=\"display-2 text-center mt-5\">\n      No Results\n    </h3>\n    <div *ngIf=\"content && content.nbHits\">\n      <p>\n        {{ lower }}-{{ upper }} of {{ content.nbHits }} results for\n        <span class=\"text-warning\">\"{{ query }}\"</span>\n      </p>\n      <hr />\n      <div class=\"product\" *ngFor=\"let product of content.hits\">\n        <div class=\"row\">\n          <div class=\"col-5 col-md-2\">\n            <a routerLink=\"/product/{{ product.objectID }}\">\n              <img\n                [src]=\"product.image\"\n                alt=\"productImage\"\n                class=\"img-fluid img-thumbnail\"\n              />\n            </a>\n          </div>\n          <div class=\"col-5 col-md-8\">\n            <div class=\"row\">\n              <div class=\"col-12 col-md-6\">\n                <h5>\n                  <a routerLink=\"/product/{{ product.objectID }}\">{{\n                    product.title\n                  }}</a>\n                </h5>\n                <p>\n                  <small>by {{ product.owner.name }}</small>\n                </p>\n                <p>{{ product.price | currency }}</p>\n              </div>\n              <div class=\"col-md-6\">\n                <ngb-rating\n                  [(rate)]=\"product.averageRating\"\n                  [starTemplate]=\"t\"\n                  [readonly]=\"true\"\n                  max=\"5\"\n                ></ngb-rating>\n              </div>\n            </div>\n          </div>\n        </div>\n        <hr />\n      </div>\n      <ngb-pagination\n        [collectionSize]=\"content.nbHits\"\n        [pageSize]=\"20\"\n        [(page)]=\"page\"\n        (pageChange)=\"getProducts()\"\n      ></ngb-pagination>\n    </div>\n  </div>\n</section>\n\n<ng-template #t let-fill=\"fill\">\n  <span *ngIf=\"fill === 100\" class=\"star full\">&#9733;</span>\n  <span *ngIf=\"fill === 0\" class=\"star\">&#9733;</span>\n  <span *ngIf=\"fill < 100 && fill > 0\" class=\"star\">\n    <span class=\"half\" [style.width.%]=\"fill\">&#9733;</span>&#9733;\n  </span>\n</ng-template>\n"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");





var SearchComponent = /** @class */ (function () {
    function SearchComponent(route, dataService, restService) {
        this.route = route;
        this.dataService = dataService;
        this.restService = restService;
        this.page = 1;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (res) {
            _this.query = res["query"];
            _this.page = 1;
            _this.getProducts();
        });
    };
    Object.defineProperty(SearchComponent.prototype, "lower", {
        get: function () {
            return 1 + this.content.hitsPerPage * this.content.page;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SearchComponent.prototype, "upper", {
        get: function () {
            return Math.min(this.content.hitsPerPage * (this.content.page + 1), this.content.nbHits);
        },
        enumerable: true,
        configurable: true
    });
    SearchComponent.prototype.getProducts = function () {
        var _this = this;
        this.content = null;
        this.restService
            .get("/api/search?query=" + this.query + "&page=" + (this.page - 1))
            .subscribe(function (data) {
            data["success"]
                ? (_this.content = data["content"])
                : _this.dataService.error(data["message"]);
        }, function (error) {
            _this.dataService.error(error["message"]);
        });
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-search",
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_4__["RestApiService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.component.html":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"settings\">\n  <div class=\"container p-5\">\n    <h4 class=\"display-4\">My Account Settings</h4>\n    <hr />\n    <app-message></app-message>\n    <div *ngIf=\"!currentSettings\" class=\"m-auto\">\n      <h1 class=\"text-center display-3 mt-5\">\n        <i class=\"fa fa-spinner fa-spin\"></i>\n      </h1>\n    </div>\n    <div *ngIf=\"currentSettings\" class=\"card bg-light\">\n      <div class=\"card-body\">\n        <form>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Name</label>\n            <input\n              type=\"text\"\n              name=\"name\"\n              class=\"form-control\"\n              [(ngModel)]=\"currentSettings.name\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Email</label>\n            <input\n              type=\"email\"\n              name=\"email\"\n              class=\"form-control\"\n              [(ngModel)]=\"currentSettings.email\"\n            />\n          </div>\n          <div class=\"form-check\">\n            <label class=\"form-check-label\">\n              <input\n                type=\"checkbox\"\n                name=\"isSeller\"\n                class=\"form-check-input\"\n                [(ngModel)]=\"currentSettings.isSeller\"\n              />\n              Is Seller\n            </label>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">New Password</label>\n            <input\n              type=\"password\"\n              name=\"newPwd\"\n              class=\"form-control\"\n              [(ngModel)]=\"currentSettings.newPwd\"\n            />\n          </div>\n          <div class=\"form-group\">\n            <label class=\"form-control-label\">Confirm Password</label>\n            <input\n              type=\"password\"\n              name=\"pwdConfirm\"\n              class=\"form-control\"\n              [(ngModel)]=\"currentSettings.pwdConfirm\"\n            />\n          </div>\n          <button\n            type=\"button\"\n            class=\"btn btn-danger\"\n            (click)=\"update()\"\n            [disabled]=\"btnDisabled\"\n          >\n            Update\n          </button>\n        </form>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/*!**************************************************!*\
  !*** ./src/app/settings/settings.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/*!************************************************!*\
  !*** ./src/app/settings/settings.component.ts ***!
  \************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ "./src/app/data.service.ts");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");




var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(dataService, restService) {
        this.dataService = dataService;
        this.restService = restService;
        this.btnDisabled = false;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (!this.dataService.user) {
                    this.restService.get("/api/accounts/profile").subscribe(function (data) {
                        _this.currentSettings = Object.assign({
                            newPwd: "",
                            pwdConfirm: ""
                        }, data["user"]);
                    });
                }
                else {
                    this.currentSettings = Object.assign({
                        newPwd: "",
                        pwdConfirm: ""
                    }, this.dataService.user);
                }
                return [2 /*return*/];
            });
        });
    };
    SettingsComponent.prototype.validate = function (settings) {
        if (settings["name"]) {
            if (settings["email"]) {
                if (settings["newPwd"]) {
                    if (settings["pwdConfirm"]) {
                        if (settings["newPwd"] === settings["pwdConfirm"]) {
                            return true;
                        }
                        else {
                            this.dataService.error("Passwords do not match.");
                        }
                    }
                    else {
                        this.dataService.error("Please enter confirmation password.");
                    }
                }
                else {
                    this.dataService.error("Please enter new password.");
                }
            }
            else {
                this.dataService.error("Please enter your email.");
            }
        }
        else {
            this.dataService.error("Please enter your name.");
        }
    };
    SettingsComponent.prototype.update = function () {
        var _this = this;
        if (this.validate(this.currentSettings)) {
            this.btnDisabled = true;
            this.restService
                .post("/api/accounts/profile", {
                name: this.currentSettings["name"],
                email: this.currentSettings["email"],
                password: this.currentSettings["newPwd"],
                isSeller: this.currentSettings["isSeller"]
            })
                .subscribe(function (data) {
                data["success"]
                    ? (_this.dataService.getProfile(),
                        _this.dataService.success(data["message"]))
                    : _this.dataService.error(data["message"]);
            }, function (error) {
                _this.dataService.error(error["message"]);
            }, function () {
                _this.btnDisabled = false;
            });
        }
    };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-settings",
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/settings/settings.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/token.interceptor.ts":
/*!**************************************!*\
  !*** ./src/app/token.interceptor.ts ***!
  \**************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor() {
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var token = localStorage.getItem("token");
        if (token) {
            request = request.clone({
                setHeaders: {
                    Authorization: token
                }
            });
        }
        return next.handle(request);
    };
    TokenInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TokenInterceptor);
    return TokenInterceptor;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! d:\Nodejs\Angular\amazon\frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map