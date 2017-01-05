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
var SettingsService = (function () {
    function SettingsService() {
    }
    Object.defineProperty(SettingsService.prototype, "STARTUP_COINS_COUNT", {
        get: function () { return 300; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "LEVEL_PRIZE_COINS_COUNT", {
        get: function () { return 3; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "FIRST_AID_ELIMINATE_A_LETTER_COINS_PRICE", {
        get: function () { return 15; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "FIRST_AID_SHOW_A_LETTER_COINS_PRICE", {
        get: function () { return 50; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "FIRST_AID_ELIMINATE_ALL_LETTERS_COINS_PRICE", {
        get: function () { return 80; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SettingsService.prototype, "DEBUG", {
        get: function () { return true; },
        enumerable: true,
        configurable: true
    });
    SettingsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SettingsService);
    return SettingsService;
}());
exports.SettingsService = SettingsService;
