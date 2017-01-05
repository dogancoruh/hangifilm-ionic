import {Letter} from "./letter";
import {Word} from "./word";

export class ActiveGameItem {
    public name: string = "";
    public imageUrl: string = "";
    public words: Array<Word>;
    public availableLetters: Array<Letter>;
}