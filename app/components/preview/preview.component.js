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
var PreviewComponent = (function () {
    function PreviewComponent() {
        this.onClosed = new core_1.EventEmitter();
    }
    PreviewComponent.prototype.onCanvasClicked = function (event) {
        this.onClosed.emit({});
    };
    PreviewComponent.prototype.onImageClicked = function (event) {
        this.onClosed.emit({});
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], PreviewComponent.prototype, "imageUrl", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], PreviewComponent.prototype, "onClosed", void 0);
    PreviewComponent = __decorate([
        core_1.Component({
            selector: 'preview',
            templateUrl: './build/components/preview/preview.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], PreviewComponent);
    return PreviewComponent;
}());
exports.PreviewComponent = PreviewComponent;
