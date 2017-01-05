import { Injectable } from '@angular/core';

@Injectable()
export class SettingsService {
    public get STARTUP_COINS_COUNT(): number { return 300; }
    public get LEVEL_PRIZE_COINS_COUNT(): number { return 3; }
    public get FIRST_AID_ELIMINATE_A_LETTER_COINS_PRICE(): number { return 15; }
    public get FIRST_AID_SHOW_A_LETTER_COINS_PRICE(): number { return 50; }
    public get FIRST_AID_ELIMINATE_ALL_LETTERS_COINS_PRICE(): number { return 80; }

    public get DEBUG(): boolean { return true; }
}