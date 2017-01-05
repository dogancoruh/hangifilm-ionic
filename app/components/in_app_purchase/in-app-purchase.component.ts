import { Component, Output, EventEmitter } from '@angular/core';
import {TranslatePipe} from "ng2-translate/ng2-translate";

@Component({
    selector: 'in-app-purchase',
    templateUrl: './build/components/in_app_purchase/in-app-purchase.component.html',
    pipes: [ TranslatePipe ]
})
export class InAppPurchaseComponent {
    @Output() onClosed = new EventEmitter();

    constructor() {

    }

    onButtonCloseClicked(event) { 
        this.onClosed.emit({});
    }
}