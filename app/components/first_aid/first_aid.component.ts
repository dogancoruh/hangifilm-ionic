import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SettingsService } from "../../services/settings/settings.service";
import {TranslatePipe} from "ng2-translate/ng2-translate";

@Component({
    selector: 'first-aid',
    templateUrl: './build/components/first_aid/first_aid.component.html',
    pipes: [ TranslatePipe ]
})
export class FirstAidComponent {
    @Input() coinsCount: number;

    @Output() onEliminateALetter = new EventEmitter();
    @Output() onShowALetter = new EventEmitter();
    @Output() onEliminateLetters = new EventEmitter();

    @Output() onClosed = new EventEmitter();

    constructor(private settings: SettingsService) {

    }

    onButtonEliminateALetterClicked(event) {
        this.onEliminateALetter.emit({});
    }

    onButtonShowALetterClicked(event) {
        this.onShowALetter.emit({});
    }

    onButtonEliminateLettersClicked(event) {
        this.onEliminateLetters.emit({});
    }

    onButtonCloseClicked(event) {
        this.onClosed.emit({});
    }
}