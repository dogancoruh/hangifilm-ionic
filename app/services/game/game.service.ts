import { Injectable } from '@angular/core';
import { Letter } from '../../classes/letter';
import {Word} from "../../classes/word";

@Injectable()
export class GameService {
    public getRandomLetter(): string {
        var letters = [ 'A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'Ğ', 'H', 'I', 'İ', 'J', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P', 'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'Y', 'Z'];
        var letterIndex = Math.floor(Math.random() * letters.length);
        return letters[letterIndex];
    }

    public getAvailableLetters(text: string): Array<Letter> {
        // filter space char
        var text_ = "";

        for (var i = 0; i < text.length; i++)
            if (text.charAt(i) != ' ')
                text_ += text.charAt(i);

        var letters: Array<Letter> = new Array();

        var index = 0;

        // pass letters to result variable
        for (var i = 0; i < text_.length; i++) {
            var letter = new Letter();

            letter.char = text_.charAt(i);
            letter.valid = true;
            letter.index = index;
            letter.visible = true;

            letters.push(letter);

            index++;
        }

        // fill remaining letters
        var randomLetterCount = 20 - text_.length;
        for (var i = 0; i < randomLetterCount; i++) {
            var letter = new Letter();

            letter.char = this.getRandomLetter();
            letter.valid = false;
            letter.index = index;
            letter.visible = true;

            letters.push(letter);

            index++;
        }

        // shuffle letters
        for(var j, x, i = letters.length; i; j = Math.floor(Math.random() * i), x = letters[--i], letters[i] = letters[j], letters[j] = x);

        // add first aid char
        var letter = new Letter();

        letter.char = '!';
        letter.valid = false;
        letter.index = -1;
        letter.visible = true;

        letters.push(letter);

        return letters;
    }

    public getAvailableLetterByIndex(availableLetters, index: number) {
        for (var i = 0; i < availableLetters.length; i++) {
            var availableLetter = availableLetters[i];

            if (availableLetter.index == index)
                return availableLetter;
        }

        return undefined;
    }

    public shuffleGameItems(gameItems) {
        var result = JSON.parse(JSON.stringify(gameItems));

        var j, x, i;
        for (i = result.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = result[i - 1];
            result[i - 1] = result[j];
            result[j] = x;
        }

        return result;
    }

    public getMovieNameWords(movieName: string): Array<Word> {
        var tokens = movieName.split(' ');
        var index = 0;
        var words: Array<Word> = new Array();

        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];

            var word: Word = new Word();
            word.letters = new Array();

            for (var j = 0; j < token.length; j++) {
                var letter = new Letter();

                letter.char = token.charAt(j);
                letter.index = index;
                letter.userChar = '';
                letter.visible = true;

                word.letters.push(letter);

                index++;
            }

            words.push(word);
        }

        return words;
    }

    public getEmptyLetterIndex(words) {
        for (var i = 0; i < words.length; i++) {
            var word: Word = words[i];

            for (var j = 0; j < word.letters.length; j++) {
                var letter: Letter = word.letters[j];

                if (letter.userChar == '')
                    return letter.index;
            }
        }

        return -1;
    }

    public putLetter(words: Array<Word>, index: number, letter: Letter) {
        for (var i = 0; i < words.length; i++) {
            var word = words[i];

            for (var j = 0; j < word.letters.length; j++) {
                var letter_ = word.letters[j];

                if (letter_.index == index) {
                    letter_.userChar = letter.char;
                    letter_.availableLetterIndex = letter.index;
                    return;
                }
            }
        }

        throw new Error("Cannot find letter index");
    }

    public checkIfMovieNameCorrect(words: Array<Word>) {
        for (var i = 0; i < words.length; i++) {
            var word = words[i];

            for (var j = 0; j < word.letters.length; j++) {
                var letter = word.letters[j];

                if (letter.char != letter.userChar)
                    return false;
            }
        }

        return true;
    }

    public checkIfMovieNameFilled(words: Array<Word>) {
        for (var i = 0; i < words.length; i++) {
            var word = words[i];

            for (var j = 0; j < word.letters.length; j++) {
                var letter = word.letters[j];

                if (letter.userChar == '')
                    return false;
            }
        }

        return true;
    }

    public eliminateALetter(availableLetters: Array<Letter>) {
        var unusefulLetterCount = 0;
        for (var i = 0; i < availableLetters.length; i++) {
            var letter: Letter = availableLetters[i];
            if (letter.char != '!' && letter.visible && !letter.valid) {
                unusefulLetterCount++;
            }
        }

        var unusefulLetterIndex = Math.floor(Math.random() * unusefulLetterCount);

        var index = 0;
        for (var i = 0; i < availableLetters.length; i++) {
            var letter: Letter = availableLetters[i];
            if (letter.char != '!' && letter.visible && !letter.valid) {
                if (index == unusefulLetterIndex) {
                    letter.visible = false;
                    return true;
                } else
                    index++;
            }
        }

        return false;
    }

    public showALetter(availableLetters, movieNameWords) {
        return false;
    }

    public eliminateAllLetters(availableLetters: Array<Letter>) {
        var result = false;

        for (var i = 0; i < availableLetters.length; i++) {
            var letter: Letter = availableLetters[i];
            if (letter.char != '!' && !letter.valid) {
                letter.visible = false;
                result = true;
            }
        }

        return result;
    }

    public getMovieNameLetterFrequencies(movieNameWords) {
        var letters:Array<Letter> = new Array();

        for (var i = 0; i < movieNameWords.length; i++) {
            var word = movieNameWords[i];

            for (var j = 0; j < word.length; j++) {
                var wordLetter = word[j];

                var letterExists = false;
                for (var k = 0; k < letters.length; k++) {
                    var letter = letters[k];
                    if (letter.char == wordLetter.char) {
                        letter.count++;
                        letterExists = true;
                        break;
                    }
                }

                if (!letterExists) {
                    var letter = new Letter();
                    letter.char = wordLetter.char;
                    letter.count = 1;
                    letters.push(letter);
                }
            }
        }

        return letters;
    }

    public getAvailableLetterFrequencies(availableLetters) {
        var letters: Array<Letter> = new Array();

        for (var i = 0; i < availableLetters.length; i++) {
            var availableLetter = availableLetters[i];

            var letterExists = false;
            for (var k = 0; k < letters.length; k++) {
                var letter = letters[k];
                if (letter.char == availableLetter.char) {
                    letter.count++;
                    letterExists = true;
                    break;
                }
            }

            if (!letterExists) {
                var letter = new Letter();
                letter.char = availableLetter.char;
                letter.count = 1;
                letters.push(letter);
            }
        }

        return letters;
    }

    public getRandomAvailableLetterForChar(availableLetters, char: string) {
        var indices = [];

        for (var i = 0; i < availableLetters.length; i++) {
            var availableLetter = availableLetters[i];

            if (availableLetter.char == char) {
                indices.push(i);
            }
        }

        var randomIndex = Math.floor(Math.random() * indices.length);
        var availableLetterIndex = indices[randomIndex];

        return availableLetters[availableLetterIndex];
    }

    public getRandomValidAvailableLetter(movieNameWords, availableLetters) {
        var availableLetterFreqs = this.getAvailableLetterFrequencies(availableLetters);
        var movieLetterFreqs = this.getMovieNameLetterFrequencies(movieNameWords);

        var randomMovieNameLetterIndex = Math.floor(Math.random() * movieLetterFreqs.length);
        var randomMovieNameLetterFreq = movieLetterFreqs[randomMovieNameLetterIndex];

        // filter available letters for randomly selected movie name letter char
        var availableLettersForChar = [];
        for (var i = 0; i < availableLetters.length; i++) {
            var availableLetter = availableLetters[i];
            if (availableLetter.char == randomMovieNameLetterFreq.char) {
                availableLettersForChar.push(availableLetter);
            }
        }

        var randomIndex = Math.floor(Math.random() * availableLettersForChar.length);
        var randomLetter = availableLettersForChar[randomIndex];

        return randomLetter;
    }
}