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
var SoundService = (function () {
    function SoundService() {
        this.PUT_LETTER_SOUND_URL = "./build/sounds/put_letter.mp3";
        this.REMOVE_LETTER_SOUND_URL = "./build/sounds/remove_letter.mp3";
        this.CORRECT_ANSWER_SOUND_URL = "./build/sounds/correct_sound2.mp3";
        this.INCORRECT_ANSWER_SOUND_URL = "./build/sounds/incorrect_sound.mp3";
        this.audioPutLetter = new Audio(this.PUT_LETTER_SOUND_URL);
        this.audioRemoveLetter = new Audio(this.REMOVE_LETTER_SOUND_URL);
        this.audioCorrectAnswer = new Audio(this.CORRECT_ANSWER_SOUND_URL);
        this.audioIncorrectAnswer = new Audio(this.INCORRECT_ANSWER_SOUND_URL);
    }
    SoundService.prototype.playPutLetter = function () {
        this.audioPutLetter.play();
    };
    SoundService.prototype.playRemoveLetter = function () {
        this.audioRemoveLetter.play();
    };
    SoundService.prototype.playCorrectAnswer = function () {
        this.audioCorrectAnswer.play();
    };
    SoundService.prototype.playIncorrectAnswer = function () {
        this.audioIncorrectAnswer.play();
    };
    SoundService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SoundService);
    return SoundService;
}());
exports.SoundService = SoundService;
