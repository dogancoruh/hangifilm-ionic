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
var game_item_1 = require('../../classes/game-item');
var DatabaseService = (function () {
    function DatabaseService() {
        this.gameItems = [
            new game_item_1.GameItem(1, "ĞGZSGŞ", "ĞGZSGŞ", "1.jpg", ""),
            new game_item_1.GameItem(2, "LJRJHJMJ İUŞBY", "ĞGHQ ZT ZNJ KAZAWJ", "2.jpg", ""),
            new game_item_1.GameItem(3, "PGSJX ĞTŞİ", "PGSJX ĞTŞİ", "3.jpg", ""),
            new game_item_1.GameItem(4, "SGİ SGD", "SGİ SGD", "4.jpg", ""),
            new game_item_1.GameItem(5, "JXGWJZÖŞ ĞJİJRÖ", "ZNJ XNGÇXNGŞQ WJİJSÜZOTŞ", "5.jpg", ""),
            new game_item_1.GameItem(6, "AHAF WTSGŞ", "ÜARÜ KOHZOTŞ", "6.jpg", ""),
            new game_item_1.GameItem(7, "İUCBY QARBĞB", "KOLNZ HRAĞ", "7.jpg", ""),
            new game_item_1.GameItem(8, "EBFBQRJWÖŞ JKJŞİÖXÖ", "ZNJ RTWİ TK ZNJ WOŞLX", "8.jpg", ""),
            new game_item_1.GameItem(9, "EORİOF XGCGYRGWO", "XZGW ÇGWX", "9.jpg", ""),
            new game_item_1.GameItem(10, "SGZWOD", "ZNJ SGZWOD", "10.jpg", "")
        ];
    }
    DatabaseService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DatabaseService);
    return DatabaseService;
}());
exports.DatabaseService = DatabaseService;
