import { Component, Input } from '@angular/core';
import {TranslatePipe} from "ng2-translate/ng2-translate";

@Component({
    selector: 'correct-incorrect-tabs',
    templateUrl: './build/components/correct_incorrect_tabs/correct-incorrect-tabs.component.html',
    pipes: [ TranslatePipe ]
})
export class CorrectIncorrectTabsComponent {
    @Input() correctAnswerTabVisible: boolean;
    @Input() incorrectAnswerTabVisible: boolean;

    constructor() {

    }
}