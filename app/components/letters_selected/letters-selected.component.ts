import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Word } from "../../classes/word";
import { Letter } from "../../classes/letter";
import {TranslatePipe} from "ng2-translate/ng2-translate";

@Component({
    selector: 'letters-selected',
    templateUrl: './build/components/letters_selected/letters-selected.component.html',
    pipes: [ TranslatePipe ]
})
export class LettersSelectedComponent {
    @Input() words: Array<Word>;
    @Input() correctAnswerTabVisible: boolean;
    @Input() wrongAnswrerTabVisible: boolean;

    @Output() onLetterSelected = new EventEmitter();

    onLetterClicked(event: MouseEvent, letter: Letter) {
        this.onLetterSelected.emit({
            letter: letter
        });
    }
}