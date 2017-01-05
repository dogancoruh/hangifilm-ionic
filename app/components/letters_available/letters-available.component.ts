import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Letter } from "../../classes/letter";

@Component({
    selector: 'letters-available',
    templateUrl: './build/components/letters_available/letters-available.component.html'
})
export class LettersAvailableComponent {
    private _letters: Array<Letter>;

    @Input()
    get letters() {
        return this._letters;
    }
    set letters(value: Array<Letter>) {
        this._letters = value;
    }

    @Output() onFirstAid = new EventEmitter();
    @Output() onLetterSelected = new EventEmitter();

    onLetterClicked(event: MouseEvent, letter: Letter) {
        if (letter.char == '!')
            this.onFirstAid.emit({});
        else
            this.onLetterSelected.emit({
                letter: letter
            });
    }
}