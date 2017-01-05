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
var LettersAvailableComponent = (function () {
    function LettersAvailableComponent() {
        this.onFirstAid = new core_1.EventEmitter();
        this.onLetterSelected = new core_1.EventEmitter();
    }
    Object.defineProperty(LettersAvailableComponent.prototype, "letters", {
        get: function () {
            return this._letters;
        },
        set: function (value) {
            this._letters = value;
        },
        enumerable: true,
        configurable: true
    });
    LettersAvailableComponent.prototype.onLetterClicked = function (event, letter) {
        if (letter.char == '!')
            this.onFirstAid.emit({});
        else
            this.onLetterSelected.emit({
                letter: letter
            });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], LettersAvailableComponent.prototype, "letters", null);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LettersAvailableComponent.prototype, "onFirstAid", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], LettersAvailableComponent.prototype, "onLetterSelected", void 0);
    LettersAvailableComponent = __decorate([
        core_1.Component({
            selector: 'letters-available',
            templateUrl: './build/components/letters_available/letters-available.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], LettersAvailableComponent);
    return LettersAvailableComponent;
}());
exports.LettersAvailableComponent = LettersAvailableComponent;
