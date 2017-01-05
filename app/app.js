"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_angular_1 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
var main_1 = require("./components/main/main");
var ng2_translate_1 = require("ng2-translate/ng2-translate");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var MyApp = (function () {
    function MyApp(platform) {
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            ionic_native_1.StatusBar.styleDefault();
        });
    }
    MyApp = __decorate([
        ionic_angular_1.App({
            templateUrl: './build/app.html',
            config: {},
            providers: [
                core_1.provide(ng2_translate_1.TranslateLoader, {
                    useFactory: function (http) { return new ng2_translate_1.TranslateStaticLoader(http, './build/localizations/', '.json'); },
                    deps: [http_1.Http]
                }),
                ng2_translate_1.TranslateService
            ],
            directives: [main_1.MainComponent]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform])
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
