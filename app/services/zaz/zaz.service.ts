import { Injectable } from '@angular/core';

@Injectable()
export class ZAZService {
    ZAZInputChars: string[] = [ 'a', 'b', 'c', 'ç', 'd', 'e', 'f', 'g', 'ğ', 'h', 'ı', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'ö', 'p', 'q', 'r', 's', 'ş', 't', 'u', 'ü', 'v', 'w', 'x', 'y', 'z',
    'A', 'B', 'C', 'Ç', 'D', 'E', 'F', 'G', 'Ğ', 'H', 'I', 'İ', 'J', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P', 'Q', 'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'W', 'X', 'Y', 'Z',
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '-', '?', '&', '\\', '\\', '/', ' ' ];

    ZAZOutputChars: string[] = [ 'g', 'ğ', 'h', 'ı', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'ö', 'p', 'q', 'r', 's', 'ş', 't', 'u', 'ü', 'v', 'w', 'x', 'y', 'z', 'a', 'b', 'c', 'ç', 'd', 'e', 'f',
    'G', 'Ğ', 'H', 'I', 'İ', 'J', 'K', 'L', 'M', 'N', 'O', 'Ö', 'P', 'Q', 'R', 'S', 'Ş', 'T', 'U', 'Ü', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'Ç', 'D', 'E', 'F',
    '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '-', '?', '&', '\\', '\\', '/', ' ' ];

    public decrypt(text: string): string {
        var result = "";

        for (var i = 0; i < text.length; i++) {
            var c = text.charAt(i);

            var index = -1;

            for (var j = 0; j < this.ZAZOutputChars.length; j++) {
                if (this.ZAZOutputChars[j] == c) {
                    index = j;
                    break;
                }
            }

            if (index != -1)
                result += this.ZAZInputChars[index];
            else
                throw new Error("Output char is not in ZAZInputChars");
        }

        return result;
    }
}