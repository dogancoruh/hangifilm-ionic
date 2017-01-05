import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SettingsService } from "../../services/settings/settings.service";
import {TranslatePipe} from "ng2-translate/ng2-translate";

@Component({
    selector: 'congrats',
    templateUrl: './build/components/congrats/congrats.component.html',
    pipes: [ TranslatePipe ]
})
export class CongratsComponent {
    @Input() activeGameItemName: string;

    @Output() onContinued = new EventEmitter();

    constructor(private settings: SettingsService) {

    }

    onButtonContinueClicked(event) {
        this.onContinued.emit({});
    }
}