import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'beyond-arrow-svg',
    templateUrl: './arrow-svg.component.html',
    styleUrls: ['./arrow-svg.component.scss']
})
export class ArrowSvgComponent implements OnInit {
    @Input() width: number;
    @Input() arrowDirection: string;


    ngOnInit() {
        if (['left', 'right', 'up', 'down'].indexOf(this.arrowDirection) === -1) {
            this.arrowDirection = 'left';
        }
    }
}
