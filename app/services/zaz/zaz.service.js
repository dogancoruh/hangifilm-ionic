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
var ZAZService = (function () {
    function ZAZService() {
        this.ZAZInputChars = ['a', 'b', 'c', 'ç', 'd', 'e', 'f', 'g', 'ğ', 'h', 'ı', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'ö', 'p', 'q', 'r', 's', 'ş', 't', 'u', 'ü', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'Ğ', 'H', 'I', 'İ', 'J', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P', 'Q', 'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'W', 'X', 'Y', 'Z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '?', '&', '\\', '\\', '/', ' '];
        this.ZAZOutputChars = ['g', 'ğ', 'h', 'ı', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'ö', 'p', 'q', 'r', 's', 'ş', 't', 'u', 'ü', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'ç', 'd', 'e', 'f',
            'G', 'Ğ', 'H', 'I', 'İ', 'J', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P', 'Q', 'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'Ç', 'D', 'E', 'F',
            '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '-', '?', '&', '\\', '\\', '/', ' '];
    }
    ZAZService.prototype.decrypt = function (text) {
        var result = "";
        for (var i = 0; i < text.length; i++) {
            var c = text.charAt(i);
            var index = -1;
            for (var j = 0; j < this.ZAZOutputChars.length; j++) {
                if (this.ZAZOutputChars[j] == c) {
                    index = j;
                    break;
                }
            }
            if (index != -1)
                result += this.ZAZInputChars[index];
            else
                throw new Error("Output char is not in ZAZInputChars");
        }
        return result;
    };
    ZAZService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ZAZService);
    return ZAZService;
}());
exports.ZAZService = ZAZService;
