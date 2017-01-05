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
// components
var header_component_1 = require('../header/header.component');
var navigator_component_1 = require('../navigator/navigator.component');
var banner_component_1 = require('../banner/banner.component');
var letters_selected_component_1 = require("../letters_selected/letters-selected.component");
var letters_available_component_1 = require("../letters_available/letters-available.component");
var correct_incorrect_tabs_component_1 = require("../correct_incorrect_tabs/correct-incorrect-tabs.component");
var options_component_1 = require("../options/options.component");
var in_app_purchase_component_1 = require("../in_app_purchase/in-app-purchase.component");
var congrats_component_1 = require("../congrats/congrats.component");
var preview_component_1 = require("../preview/preview.component");
var first_aid_component_1 = require("../first_aid/first_aid.component");
// services
var settings_service_1 = require("../../services/settings/settings.service");
var game_service_1 = require("../../services/game/game.service");
var sound_service_1 = require("../../services/sound/sound.service");
var database_service_1 = require("../../services/database/database.service");
var zaz_service_1 = require("../../services/zaz/zaz.service");
var active_game_item_1 = require("../../classes/active-game-item");
// ionic specific
var index_1 = require("ionic-angular/index");
// localization
var ng2_translate_1 = require("ng2-translate/ng2-translate");
var MainComponent = (function () {
    function MainComponent(platform, settings, database, game, sound, zaz, translate) {
        this.platform = platform;
        this.settings = settings;
        this.database = database;
        this.game = game;
        this.sound = sound;
        this.zaz = zaz;
        this.translate = translate;
        this.bannerVisible = false;
        this.previewVisible = false;
        this.optionsVisible = false;
        this.firstAidVisible = false;
        this.congratsVisible = false;
        this.inAppPurchaseVisible = false;
        this.correctAnswerTabVisible = false;
        this.incorrectAnswerTabVisible = false;
        this._level = 0;
        this._coinsCount = 300;
        this.initializeLocalization();
        this.initializeDatabase();
        this.initializeBanner();
        this.refreshAll();
    }
    Object.defineProperty(MainComponent.prototype, "level", {
        get: function () {
            return this._level;
        },
        set: function (value) {
            this._level = value;
            this.refreshAll();
            window.localStorage["level"] = this._level.toString();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MainComponent.prototype, "coinsCount", {
        get: function () {
            return this._coinsCount;
        },
        set: function (value) {
            this._coinsCount = value;
            window.localStorage["coinsCount"] = this._coinsCount.toString();
        },
        enumerable: true,
        configurable: true
    });
    MainComponent.prototype.initializeLocalization = function () {
        console.info("languages > %o", this.translate.getLangs());
        this.translate.setDefaultLang('tr');
        this.translate.use("tr");
    };
    MainComponent.prototype.initializeDatabase = function () {
        // uncomment to reset user game data
        window.localStorage.clear();
        // gameItems
        if (window.localStorage["gameItems"] == undefined)
            window.localStorage["gameItems"] = JSON.stringify(this.game.shuffleGameItems(this.database.gameItems));
        this.gameItems = JSON.parse(window.localStorage["gameItems"]);
        // level
        if (window.localStorage["level"] != undefined)
            this.level = parseInt(window.localStorage["level"]);
        else
            window.localStorage["level"] = this.level.toString();
        // coinsCount
        if (window.localStorage["coinsCount"] != undefined)
            this.coinsCount = parseInt(window.localStorage["coinsCount"]);
        else {
            this.coinsCount = this.settings.STARTUP_COINS_COUNT;
            window.localStorage["coinsCount"] = this.settings.STARTUP_COINS_COUNT.toString();
        }
    };
    MainComponent.prototype.initializeBanner = function () {
        this.bannerVisible = !this.platform.is('ios') &&
            !this.platform.is('android') &&
            !this.platform.is('window');
    };
    MainComponent.prototype.refreshAll = function () {
        var gameItem = this.gameItems[this.level];
        // transfer data to active game item
        this.activeGameItem = new active_game_item_1.ActiveGameItem();
        this.activeGameItem.name = this.zaz.decrypt(this.gameItems[this.level].language_tr);
        this.activeGameItem.imageUrl = './build/images/game/' + gameItem.pictureUrl;
        // generate word and letter data
        this.activeGameItem.availableLetters = this.game.getAvailableLetters(this.activeGameItem.name);
        this.activeGameItem.words = this.game.getMovieNameWords(this.activeGameItem.name);
        console.info(this.activeGameItem.name);
    };
    MainComponent.prototype.onHeaderOptions = function (event) {
        this.optionsVisible = true;
    };
    MainComponent.prototype.onHeaderGameCenter = function (event) {
        console.info("game center");
    };
    MainComponent.prototype.onHeaderInAppPurchase = function (event) {
        this.inAppPurchaseVisible = true;
    };
    MainComponent.prototype.onNavigatorImageClicked = function () {
        this.previewVisible = true;
    };
    MainComponent.prototype.onPreviewClosed = function (event) {
        this.previewVisible = false;
    };
    MainComponent.prototype.onNavigatorPrevious = function (event) {
        if (this.level > 0)
            this.level--;
    };
    MainComponent.prototype.onNavigatorNext = function (event) {
        if (this.level < this.gameItems.length - 1)
            this.level++;
    };
    MainComponent.prototype.onAvailableLetterSelected = function (event) {
        var _this = this;
        // check if movie name is filled
        if (!this.game.checkIfMovieNameFilled(this.activeGameItem.words)) {
            var availableLetter = event.letter;
            if (availableLetter.visible) {
                // hide available letter that user has selected
                availableLetter.visible = false;
                // set selected letter
                var emptyLetterIndex = this.game.getEmptyLetterIndex(this.activeGameItem.words);
                if (emptyLetterIndex != -1) {
                    this.game.putLetter(this.activeGameItem.words, emptyLetterIndex, availableLetter);
                }
            }
            // check if name is filled
            if (this.game.checkIfMovieNameFilled(this.activeGameItem.words)) {
                if (this.game.checkIfMovieNameCorrect(this.activeGameItem.words)) {
                    this.correctAnswerTabVisible = true;
                    this.sound.playCorrectAnswer();
                    setTimeout(function () {
                        _this.congrats.activeGameItemName = _this.activeGameItem.name;
                        _this.congratsVisible = true;
                        _this.correctAnswerTabVisible = false;
                        _this.incorrectAnswerTabVisible = false;
                        _this.level++;
                    }, 1000);
                }
                else {
                    this.incorrectAnswerTabVisible = true;
                    this.sound.playIncorrectAnswer();
                }
            }
            else {
                this.sound.playPutLetter();
            }
        }
    };
    MainComponent.prototype.onSelectedLetterSelected = function (event) {
        var selectedLetter = event.letter;
        if (selectedLetter.userChar != '') {
            var availableLetter = this.game.getAvailableLetterByIndex(this.activeGameItem.availableLetters, selectedLetter.availableLetterIndex);
            availableLetter.visible = true;
            selectedLetter.userChar = '';
            this.sound.playRemoveLetter();
            this.correctAnswerTabVisible = false;
            this.incorrectAnswerTabVisible = false;
        }
    };
    MainComponent.prototype.onFirstAid = function () {
        this.firstAidVisible = true;
    };
    MainComponent.prototype.onFirstAidEliminateALetter = function () {
        this.game.eliminateALetter(this.activeGameItem.availableLetters);
        this.coinsCount -= this.settings.FIRST_AID_ELIMINATE_A_LETTER_COINS_PRICE;
        this.firstAidVisible = false;
    };
    MainComponent.prototype.onFirstAidShowALetter = function () {
        this.game.showALetter(this.activeGameItem.availableLetters, this.activeGameItem.words);
        this.coinsCount -= this.settings.FIRST_AID_SHOW_A_LETTER_COINS_PRICE;
        this.firstAidVisible = false;
    };
    MainComponent.prototype.onFirstAidEliminateLetters = function () {
        this.game.eliminateAllLetters(this.activeGameItem.availableLetters);
        this.coinsCount -= this.settings.FIRST_AID_ELIMINATE_ALL_LETTERS_COINS_PRICE;
        this.firstAidVisible = false;
    };
    MainComponent.prototype.onFirstAidClosed = function () {
        this.firstAidVisible = false;
    };
    MainComponent.prototype.onCongratsContinued = function (event) {
        this.congratsVisible = false;
    };
    MainComponent.prototype.onOptionsClosed = function (event) {
        this.optionsVisible = false;
    };
    MainComponent.prototype.onInAppPurchaseClosed = function (event) {
        this.inAppPurchaseVisible = false;
    };
    __decorate([
        core_1.ViewChild('congrats'), 
        __metadata('design:type', Object)
    ], MainComponent.prototype, "congrats", void 0);
    MainComponent = __decorate([
        core_1.Component({
            selector: 'main',
            templateUrl: './build/components/main/main.html',
            directives: [
                header_component_1.HeaderComponent,
                navigator_component_1.NavigatorComponent,
                letters_selected_component_1.LettersSelectedComponent,
                letters_available_component_1.LettersAvailableComponent,
                banner_component_1.BannerComponent,
                options_component_1.OptionsComponent,
                in_app_purchase_component_1.InAppPurchaseComponent,
                congrats_component_1.CongratsComponent,
                preview_component_1.PreviewComponent,
                first_aid_component_1.FirstAidComponent,
                correct_incorrect_tabs_component_1.CorrectIncorrectTabsComponent
            ],
            providers: [
                settings_service_1.SettingsService,
                zaz_service_1.ZAZService,
                game_service_1.GameService,
                sound_service_1.SoundService,
                database_service_1.DatabaseService
            ],
            pipes: [
                ng2_translate_1.TranslatePipe
            ]
        }), 
        __metadata('design:paramtypes', [index_1.Platform, settings_service_1.SettingsService, database_service_1.DatabaseService, game_service_1.GameService, sound_service_1.SoundService, zaz_service_1.ZAZService, ng2_translate_1.TranslateService])
    ], MainComponent);
    return MainComponent;
}());
exports.MainComponent = MainComponent;
