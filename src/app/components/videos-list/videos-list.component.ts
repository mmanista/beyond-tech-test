import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../services/videos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'beyond-videos-list',
    templateUrl: './videos-list.component.html',
    styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit {

    /* Sorry, I've tried to use some types definitions for Youtube API objects, but they don't seem to work :(
    Creating my own types from scratch would take me some precious time, so I've decided not to do that */

    // videosData: GoogleApiYouTubePaginationInfo<GoogleApiYouTubePlaylistItemResource>;
    videosData: any;

    constructor(private readonly videosService: VideosService,
                private readonly route: ActivatedRoute) {
    }

    ngOnInit() {
        this.videosData = this.route.snapshot.data.videosData;
    }

    gotoNextPage(nextPageToken) {
        this.videosService.getNextPage(nextPageToken).subscribe(
            (response: any) => {
                window.scrollTo(0, 0);
                this.videosData = response;
            });
    }

}
