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
var LettersSelectedComponent = (function () {
    function LettersSelectedComponent() {
        this.onLetterSelected = new core_1.EventEmitter();
    }
    LettersSelectedComponent.prototype.onLetterClicked = function (event, letter) {
        this.onLetterSelected.emit({
            letter: letter
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], LettersSelectedComponent.prototype, "words", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], LettersSelectedComponent.prototype, "correctAnswerTabVisible", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], LettersSelectedComponent.prototype, "wrongAnswrerTabVisible", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LettersSelectedComponent.prototype, "onLetterSelected", void 0);
    LettersSelectedComponent = __decorate([
        core_1.Component({
            selector: 'letters-selected',
            templateUrl: './build/components/letters_selected/letters-selected.component.html',
            pipes: [ng2_translate_1.TranslatePipe]
        }), 
        __metadata('design:paramtypes', [])
    ], LettersSelectedComponent);
    return LettersSelectedComponent;
}());
exports.LettersSelectedComponent = LettersSelectedComponent;
