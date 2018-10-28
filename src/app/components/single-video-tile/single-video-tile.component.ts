import { Component, Input } from '@angular/core';

@Component({
    selector: 'beyond-single-video-tile',
    templateUrl: './single-video-tile.component.html',
    styleUrls: ['./single-video-tile.component.scss']
})
export class SingleVideoTileComponent {
    @Input() videoDetails: any;
}
