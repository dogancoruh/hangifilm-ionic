"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var letter_1 = require('../../classes/letter');
var word_1 = require("../../classes/word");
var GameService = (function () {
    function GameService() {
    }
    GameService.prototype.getRandomLetter = function () {
        var letters = ['A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'Ğ', 'H', 'I', 'İ', 'J', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P', 'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'Y', 'Z'];
        var letterIndex = Math.floor(Math.random() * letters.length);
        return letters[letterIndex];
    };
    GameService.prototype.getAvailableLetters = function (text) {
        // filter space char
        var text_ = "";
        for (var i = 0; i < text.length; i++)
            if (text.charAt(i) != ' ')
                text_ += text.charAt(i);
        var letters = new Array();
        var index = 0;
        // pass letters to result variable
        for (var i = 0; i < text_.length; i++) {
            var letter = new letter_1.Letter();
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
            var letter = new letter_1.Letter();
            letter.char = this.getRandomLetter();
            letter.valid = false;
            letter.index = index;
            letter.visible = true;
            letters.push(letter);
            index++;
        }
        // shuffle letters
        for (var j, x, i = letters.length; i; j = Math.floor(Math.random() * i), x = letters[--i], letters[i] = letters[j], letters[j] = x)
            ;
        // add first aid char
        var letter = new letter_1.Letter();
        letter.char = '!';
        letter.valid = false;
        letter.index = -1;
        letter.visible = true;
        letters.push(letter);
        return letters;
    };
    GameService.prototype.getAvailableLetterByIndex = function (availableLetters, index) {
        for (var i = 0; i < availableLetters.length; i++) {
            var availableLetter = availableLetters[i];
            if (availableLetter.index == index)
                return availableLetter;
        }
        return undefined;
    };
    GameService.prototype.shuffleGameItems = function (gameItems) {
        var result = JSON.parse(JSON.stringify(gameItems));
        var j, x, i;
        for (i = result.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            x = result[i - 1];
            result[i - 1] = result[j];
            result[j] = x;
        }
        return result;
    };
    GameService.prototype.getMovieNameWords = function (movieName) {
        var tokens = movieName.split(' ');
        var index = 0;
        var words = new Array();
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            var word = new word_1.Word();
            word.letters = new Array();
            for (var j = 0; j < token.length; j++) {
                var letter = new letter_1.Letter();
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
    };
    GameService.prototype.getEmptyLetterIndex = function (words) {
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            for (var j = 0; j < word.letters.length; j++) {
                var letter = word.letters[j];
                if (letter.userChar == '')
                    return letter.index;
            }
        }
        return -1;
    };
    GameService.prototype.putLetter = function (words, index, letter) {
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
    };
    GameService.prototype.checkIfMovieNameCorrect = function (words) {
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            for (var j = 0; j < word.letters.length; j++) {
                var letter = word.letters[j];
                if (letter.char != letter.userChar)
                    return false;
            }
        }
        return true;
    };
    GameService.prototype.checkIfMovieNameFilled = function (words) {
        for (var i = 0; i < words.length; i++) {
            var word = words[i];
            for (var j = 0; j < word.letters.length; j++) {
                var letter = word.letters[j];
                if (letter.userChar == '')
                    return false;
            }
        }
        return true;
    };
    GameService.prototype.eliminateALetter = function (availableLetters) {
        var unusefulLetterCount = 0;
        for (var i = 0; i < availableLetters.length; i++) {
            var letter = availableLetters[i];
            if (letter.char != '!' && letter.visible && !letter.valid) {
                unusefulLetterCount++;
            }
        }
        var unusefulLetterIndex = Math.floor(Math.random() * unusefulLetterCount);
        var index = 0;
        for (var i = 0; i < availableLetters.length; i++) {
            var letter = availableLetters[i];
            if (letter.char != '!' && letter.visible && !letter.valid) {
                if (index == unusefulLetterIndex) {
                    letter.visible = false;
                    return true;
                }
                else
                    index++;
            }
        }
        return false;
    };
    GameService.prototype.showALetter = function (availableLetters, movieNameWords) {
        return false;
    };
    GameService.prototype.eliminateAllLetters = function (availableLetters) {
        var result = false;
        for (var i = 0; i < availableLetters.length; i++) {
            var letter = availableLetters[i];
            if (letter.char != '!' && !letter.valid) {
                letter.visible = false;
                result = true;
            }
        }
        return result;
    };
    GameService.prototype.getMovieNameLetterFrequencies = function (movieNameWords) {
        var letters = new Array();
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
                    var letter = new letter_1.Letter();
                    letter.char = wordLetter.char;
                    letter.count = 1;
                    letters.push(letter);
                }
            }
        }
        return letters;
    };
    GameService.prototype.getAvailableLetterFrequencies = function (availableLetters) {
        var letters = new Array();
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
                var letter = new letter_1.Letter();
                letter.char = availableLetter.char;
                letter.count = 1;
                letters.push(letter);
            }
        }
        return letters;
    };
    GameService.prototype.getRandomAvailableLetterForChar = function (availableLetters, char) {
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
    };
    GameService.prototype.getRandomValidAvailableLetter = function (movieNameWords, availableLetters) {
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
    };
    GameService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], GameService);
    return GameService;
}());
exports.GameService = GameService;
