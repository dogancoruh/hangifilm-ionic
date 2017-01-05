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
var settings_service_1 = require("../../services/settings/settings.service");
var ng2_translate_1 = require("ng2-translate/ng2-translate");
var CongratsComponent = (function () {
    function CongratsComponent(settings) {
        this.settings = settings;
        this.onContinued = new core_1.EventEmitter();
    }
    CongratsComponent.prototype.onButtonContinueClicked = function (event) {
        this.onContinued.emit({});
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], CongratsComponent.prototype, "activeGameItemName", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CongratsComponent.prototype, "onContinued", void 0);
    CongratsComponent = __decorate([
        core_1.Component({
            selector: 'congrats',
            templateUrl: './build/components/congrats/congrats.component.html',
            pipes: [ng2_translate_1.TranslatePipe]
        }), 
        __metadata('design:paramtypes', [settings_service_1.SettingsService])
    ], CongratsComponent);
    return CongratsComponent;
}());
exports.CongratsComponent = CongratsComponent;
