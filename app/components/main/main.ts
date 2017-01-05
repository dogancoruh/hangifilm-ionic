import {Component, ElementRef, ViewChild } from '@angular/core';

// components
import { HeaderComponent } from '../header/header.component';
import { NavigatorComponent } from '../navigator/navigator.component';
import { BannerComponent } from '../banner/banner.component';
import { LettersSelectedComponent } from "../letters_selected/letters-selected.component";
import { LettersAvailableComponent } from "../letters_available/letters-available.component";
import { CorrectIncorrectTabsComponent } from "../correct_incorrect_tabs/correct-incorrect-tabs.component";
import { OptionsComponent } from "../options/options.component";
import { InAppPurchaseComponent } from "../in_app_purchase/in-app-purchase.component";
import { CongratsComponent } from "../congrats/congrats.component";
import { PreviewComponent } from "../preview/preview.component";
import { FirstAidComponent } from "../first_aid/first_aid.component";

// services
import { SettingsService } from "../../services/settings/settings.service";
import { GameService } from "../../services/game/game.service";
import { SoundService } from "../../services/sound/sound.service";
import { DatabaseService } from "../../services/database/database.service";
import { ZAZService } from "../../services/zaz/zaz.service";

// data classes
import { GameItem } from "../../classes/game-item";
import { ActiveGameItem } from "../../classes/active-game-item";
import { Letter } from "../../classes/letter";

// ionic specific
import { Platform } from "ionic-angular/index";

// localization
import { TranslatePipe, TranslateService } from "ng2-translate/ng2-translate";

@Component({
    selector: 'main',
    templateUrl: './build/components/main/main.html',
    directives: [
        HeaderComponent,
        NavigatorComponent,
        LettersSelectedComponent,
        LettersAvailableComponent,
        BannerComponent,
        OptionsComponent,
        InAppPurchaseComponent,
        CongratsComponent,
        PreviewComponent,
        FirstAidComponent,
        CorrectIncorrectTabsComponent
    ],
    providers: [
        SettingsService,
        ZAZService,
        GameService,
        SoundService,
        DatabaseService
    ],
    pipes: [
        TranslatePipe
    ]
})
export class MainComponent {
    private bannerVisible: boolean = false;
    private previewVisible: boolean = false;
    private optionsVisible: boolean = false;
    private firstAidVisible: boolean = false;
    private congratsVisible: boolean = false;
    private inAppPurchaseVisible: boolean = false;

    private correctAnswerTabVisible: boolean = false;
    private incorrectAnswerTabVisible: boolean = false;

    private _level: number = 0;

    get level() {
        return this._level;
    }
    set level(value: number) {
        this._level = value;
        this.refreshAll();
        window.localStorage["level"] = this._level.toString();
    }

    private _coinsCount: number = 300;

    get coinsCount() {
        return this._coinsCount;
    }
    set coinsCount(value: number) {
        this._coinsCount = value;
        window.localStorage["coinsCount"] = this._coinsCount.toString();
    }

    private activeGameItem: ActiveGameItem;
    private gameItems: Array<GameItem>;

    @ViewChild('congrats') private congrats;

    constructor(
        private platform: Platform,
        private settings: SettingsService,
        private database: DatabaseService,
        private game: GameService,
        private sound: SoundService,
        private zaz: ZAZService,
        private translate: TranslateService
    ) {
        this.initializeLocalization();
        this.initializeDatabase();
        this.initializeBanner();
        this.refreshAll();
    }

    private initializeLocalization() {
        console.info("languages > %o", this.translate.getLangs());

        this.translate.setDefaultLang('tr');
        this.translate.use("tr");
    }

    private initializeDatabase() {
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
    }

    private initializeBanner() {
        this.bannerVisible = !this.platform.is('ios') &&
                             !this.platform.is('android') &&
                             !this.platform.is('window');
    }

    private refreshAll() {
        let gameItem:GameItem = this.gameItems[this.level];

        // transfer data to active game item
        this.activeGameItem = new ActiveGameItem();
        this.activeGameItem.name = this.zaz.decrypt(this.gameItems[this.level].language_tr);
        this.activeGameItem.imageUrl = './build/images/game/' + gameItem.pictureUrl;

        // generate word and letter data
        this.activeGameItem.availableLetters = this.game.getAvailableLetters(this.activeGameItem.name);
        this.activeGameItem.words = this.game.getMovieNameWords(this.activeGameItem.name);

        console.info(this.activeGameItem.name);
    }

    onHeaderOptions(event) {
        this.optionsVisible = true;
    }

    onHeaderGameCenter(event) {
        console.info("game center");
    }

    onHeaderInAppPurchase(event) {
        this.inAppPurchaseVisible = true;
    }

    onNavigatorImageClicked() {
        this.previewVisible = true;
    }

    onPreviewClosed(event) {
        this.previewVisible = false;
    }

    onNavigatorPrevious(event) {
        if (this.level > 0)
            this.level--;
    }

    onNavigatorNext(event) {
        if (this.level < this.gameItems.length - 1)
            this.level++;
    }

    onAvailableLetterSelected(event) {
        // check if movie name is filled
        if (!this.game.checkIfMovieNameFilled(this.activeGameItem.words)) {
            let availableLetter:Letter = event.letter;
            if (availableLetter.visible) {
                // hide available letter that user has selected
                availableLetter.visible = false;

                // set selected letter
                let emptyLetterIndex:number = this.game.getEmptyLetterIndex(this.activeGameItem.words)
                if (emptyLetterIndex != -1) {
                    this.game.putLetter(this.activeGameItem.words, emptyLetterIndex, availableLetter);
                    //this.sound.playPutLetter();
                }
            }

            // check if name is filled
            if (this.game.checkIfMovieNameFilled(this.activeGameItem.words)) {
                if (this.game.checkIfMovieNameCorrect(this.activeGameItem.words)) {
                    this.correctAnswerTabVisible = true;
                    this.sound.playCorrectAnswer();
                    setTimeout(() => {
                        this.congrats.activeGameItemName = this.activeGameItem.name;
                        this.congratsVisible = true;

                        this.correctAnswerTabVisible = false;
                        this.incorrectAnswerTabVisible = false;

                        this.level++;
                    }, 1000);
                } else {
                    this.incorrectAnswerTabVisible = true;
                    this.sound.playIncorrectAnswer();
                }
            } else {
                this.sound.playPutLetter();
            }
        }
    }

    onSelectedLetterSelected(event) {
        let selectedLetter: Letter = event.letter;
        if (selectedLetter.userChar != '') {
            let availableLetter: Letter = this.game.getAvailableLetterByIndex(this.activeGameItem.availableLetters, selectedLetter.availableLetterIndex);

            availableLetter.visible = true;
            selectedLetter.userChar = '';

            this.sound.playRemoveLetter();

            this.correctAnswerTabVisible = false;
            this.incorrectAnswerTabVisible = false;
        }
    }

    onFirstAid() {
        this.firstAidVisible = true;
    }

    onFirstAidEliminateALetter() {
        this.game.eliminateALetter(this.activeGameItem.availableLetters);
        this.coinsCount -= this.settings.FIRST_AID_ELIMINATE_A_LETTER_COINS_PRICE;
        this.firstAidVisible = false;
    }

    onFirstAidShowALetter() {
        this.game.showALetter(this.activeGameItem.availableLetters, this.activeGameItem.words);
        this.coinsCount -= this.settings.FIRST_AID_SHOW_A_LETTER_COINS_PRICE;
        this.firstAidVisible = false;
    }

    onFirstAidEliminateLetters() {
        this.game.eliminateAllLetters(this.activeGameItem.availableLetters);
        this.coinsCount -= this.settings.FIRST_AID_ELIMINATE_ALL_LETTERS_COINS_PRICE;
        this.firstAidVisible = false;
    }

    onFirstAidClosed() {
        this.firstAidVisible = false;
    }

    onCongratsContinued(event) {
        this.congratsVisible = false;
    }

    onOptionsClosed(event) {
        this.optionsVisible = false;
    }

    onInAppPurchaseClosed(event) {
        this.inAppPurchaseVisible = false;
    }
}