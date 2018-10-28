import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Params } from '@angular/router';
import { VideosService } from '../../services/videos.service';

@Component({
    selector: 'beyond-play-video',
    templateUrl: './play-video.component.html',
    styleUrls: ['./play-video.component.scss']
})
export class PlayVideoComponent implements OnInit {
    singleVideoData: any;
    isLoading: boolean;
    constructor(private readonly http: HttpClient, private readonly route: ActivatedRoute, private readonly videosService: VideosService) {}
    ngOnInit() {
        this.route.params.subscribe((params: Params) => {
            this.isLoading = true;
            this.videosService.getSingleVideoData(params.videoId).subscribe((response: any) => {
                console.log("A DEJ", response);
                this.singleVideoData = response;
                this.isLoading = false;
            });
        });
    }
}
