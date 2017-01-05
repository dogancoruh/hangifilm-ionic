import { Component, Input, Output, EventEmitter } from '@angular/core';
import {TranslatePipe} from "ng2-translate/ng2-translate";

@Component({
    selector: 'options',
    templateUrl: './build/components/options/options.component.html',
    pipes: [ TranslatePipe ]
})
export class OptionsComponent {
    @Output() onClosed = new EventEmitter();

    onButtonCloseClicked(event) {
        this.onClosed.emit({});
    }
}