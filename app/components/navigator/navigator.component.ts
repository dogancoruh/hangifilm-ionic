import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'navigator',
    templateUrl: './build/components/navigator/navigator.component.html'
})
export class NavigatorComponent {
    @Input() debug:boolean = true;
    @Input() imageUrl:string = ""; 

    @Output() onImageClicked = new EventEmitter();
    @Output() onPrevious = new EventEmitter();
    @Output() onNext = new EventEmitter();

    onButtonImageClicked(event) {
        this.onImageClicked.emit({});
    }

    onButtonPreviousClicked(event) {
        this.onPrevious.emit({});
    }

    onButtonNextClicked(event) {
        this.onNext.emit({});
    }
}