import { Injectable } from '@angular/core';

@Injectable()
export class SoundService {
    private PUT_LETTER_SOUND_URL: string = "./build/sounds/put_letter.mp3";
    private REMOVE_LETTER_SOUND_URL: string = "./build/sounds/remove_letter.mp3";
    private CORRECT_ANSWER_SOUND_URL: string = "./build/sounds/correct_sound2.mp3";
    private INCORRECT_ANSWER_SOUND_URL: string = "./build/sounds/incorrect_sound.mp3";

    private audioPutLetter = new Audio(this.PUT_LETTER_SOUND_URL);
    private audioRemoveLetter = new Audio(this.REMOVE_LETTER_SOUND_URL);
    private audioCorrectAnswer = new Audio(this.CORRECT_ANSWER_SOUND_URL);
    private audioIncorrectAnswer = new Audio(this.INCORRECT_ANSWER_SOUND_URL);

    public playPutLetter() {
        this.audioPutLetter.play();
    }

    public playRemoveLetter() {
        this.audioRemoveLetter.play();
    }

    playCorrectAnswer() {
        this.audioCorrectAnswer.play();
    }

    playIncorrectAnswer() {
        this.audioIncorrectAnswer.play();
    }
}