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
var core_1 = require('@angular/core');
var game_item_1 = require("../../classes/game-item");
var ng2_translate_1 = require("ng2-translate/ng2-translate");
var HeaderComponent = (function () {
    function HeaderComponent() {
        this.level = 0;
        this.coinsCount = 0;
        this.onOptions = new core_1.EventEmitter();
        this.onGameCenter = new core_1.EventEmitter();
        this.onInAppPurchase = new core_1.EventEmitter();
    }
    HeaderComponent.prototype.onButtonOptionsClicked = function (event) {
        this.onOptions.emit({});
    };
    HeaderComponent.prototype.onButtonGameCenterClicked = function (event) {
        this.onGameCenter.emit({});
    };
    HeaderComponent.prototype.onButtonInAppPurchaseClicked = function (event) {
        this.onInAppPurchase.emit({});
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], HeaderComponent.prototype, "level", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], HeaderComponent.prototype, "coinsCount", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', game_item_1.GameItem)
    ], HeaderComponent.prototype, "gameItem", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HeaderComponent.prototype, "onOptions", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HeaderComponent.prototype, "onGameCenter", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], HeaderComponent.prototype, "onInAppPurchase", void 0);
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'header',
            templateUrl: './build/components/header/header.component.html',
            pipes: [ng2_translate_1.TranslatePipe]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
