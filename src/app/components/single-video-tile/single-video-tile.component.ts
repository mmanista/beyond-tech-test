import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'beyond-single-video-tile',
    templateUrl: './single-video-tile.component.html',
    styleUrls: ['./single-video-tile.component.scss']
})
export class SingleVideoTileComponent {

    constructor(private readonly router: Router) {}
    @Input() videoDetails: any;

    gotoVideo() {
        console.log("CYCE");
        this.router.navigate(['/play/' + this.videoDetails.snippet.resourceId.videoId]).then(response => {
            console.log("RESPONSE", response);
        });
    }
}
