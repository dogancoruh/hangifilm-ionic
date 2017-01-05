import { Component, Input, Output, EventEmitter } from '@angular/core';
import { GameItem } from "../../classes/game-item";
import {TranslateService, TranslatePipe} from "ng2-translate/ng2-translate";

@Component({
    selector: 'header',
    templateUrl: './build/components/header/header.component.html',
    pipes: [ TranslatePipe ]
})
export class HeaderComponent {
    @Input() level: number = 0;
    @Input() coinsCount: number = 0;
    @Input() gameItem: GameItem;

    @Output() onOptions = new EventEmitter();
    @Output() onGameCenter = new EventEmitter();
    @Output() onInAppPurchase = new EventEmitter();

    constructor() {

    }

    onButtonOptionsClicked(event) {
        this.onOptions.emit({});
    }

    onButtonGameCenterClicked(event) {
        this.onGameCenter.emit({});
    }

    onButtonInAppPurchaseClicked(event) { 
        this.onInAppPurchase.emit({});
    }
}