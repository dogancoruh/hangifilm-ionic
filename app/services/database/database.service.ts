import { Injectable } from '@angular/core';
import { GameItem } from '../../classes/game-item';

@Injectable()
export class DatabaseService {
	public gameItems: Array<GameItem> = [
		new GameItem(1, "ĞGZSGŞ", "ĞGZSGŞ", "1.jpg", ""),
		new GameItem(2, "LJRJHJMJ İUŞBY", "ĞGHQ ZT ZNJ KAZAWJ", "2.jpg", ""),
		new GameItem(3, "PGSJX ĞTŞİ", "PGSJX ĞTŞİ", "3.jpg", ""),
		new GameItem(4, "SGİ SGD", "SGİ SGD", "4.jpg", ""),
		new GameItem(5, "JXGWJZÖŞ ĞJİJRÖ", "ZNJ XNGÇXNGŞQ WJİJSÜZOTŞ", "5.jpg", ""),
		new GameItem(6, "AHAF WTSGŞ", "ÜARÜ KOHZOTŞ", "6.jpg", ""),
		new GameItem(7, "İUCBY QARBĞB", "KOLNZ HRAĞ", "7.jpg", ""),
		new GameItem(8, "EBFBQRJWÖŞ JKJŞİÖXÖ", "ZNJ RTWİ TK ZNJ WOŞLX", "8.jpg", ""),
		new GameItem(9, "EORİOF XGCGYRGWO", "XZGW ÇGWX", "9.jpg", ""),
		new GameItem(10, "SGZWOD", "ZNJ SGZWOD", "10.jpg", "")
	];
}
