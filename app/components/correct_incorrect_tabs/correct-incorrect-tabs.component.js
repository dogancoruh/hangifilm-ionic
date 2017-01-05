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
var ng2_translate_1 = require("ng2-translate/ng2-translate");
var CorrectIncorrectTabsComponent = (function () {
    function CorrectIncorrectTabsComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CorrectIncorrectTabsComponent.prototype, "correctAnswerTabVisible", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], CorrectIncorrectTabsComponent.prototype, "incorrectAnswerTabVisible", void 0);
    CorrectIncorrectTabsComponent = __decorate([
        core_1.Component({
            selector: 'correct-incorrect-tabs',
            templateUrl: './build/components/correct_incorrect_tabs/correct-incorrect-tabs.component.html',
            pipes: [ng2_translate_1.TranslatePipe]
        }), 
        __metadata('design:paramtypes', [])
    ], CorrectIncorrectTabsComponent);
    return CorrectIncorrectTabsComponent;
}());
exports.CorrectIncorrectTabsComponent = CorrectIncorrectTabsComponent;
