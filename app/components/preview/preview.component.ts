import { Component, Input, Output, EventEmitter }  from '@angular/core';

@Component({
    selector: 'preview',
    templateUrl: './build/components/preview/preview.component.html'
})
export class PreviewComponent {
    @Input() imageUrl: string;

    @Output() onClosed = new EventEmitter();

    onCanvasClicked(event) {
        this.onClosed.emit({});
    }

    onImageClicked(event:MouseEvent) {
        this.onClosed.emit({});
    }
}