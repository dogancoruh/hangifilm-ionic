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
var NavigatorComponent = (function () {
    function NavigatorComponent() {
        this.debug = true;
        this.imageUrl = "";
        this.onImageClicked = new core_1.EventEmitter();
        this.onPrevious = new core_1.EventEmitter();
        this.onNext = new core_1.EventEmitter();
    }
    NavigatorComponent.prototype.onButtonImageClicked = function (event) {
        this.onImageClicked.emit({});
    };
    NavigatorComponent.prototype.onButtonPreviousClicked = function (event) {
        this.onPrevious.emit({});
    };
    NavigatorComponent.prototype.onButtonNextClicked = function (event) {
        this.onNext.emit({});
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], NavigatorComponent.prototype, "debug", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], NavigatorComponent.prototype, "imageUrl", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NavigatorComponent.prototype, "onImageClicked", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NavigatorComponent.prototype, "onPrevious", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], NavigatorComponent.prototype, "onNext", void 0);
    NavigatorComponent = __decorate([
        core_1.Component({
            selector: 'navigator',
            templateUrl: './build/components/navigator/navigator.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], NavigatorComponent);
    return NavigatorComponent;
}());
exports.NavigatorComponent = NavigatorComponent;
