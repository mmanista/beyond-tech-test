import { Component, OnInit } from '@angular/core';
import { VideosService } from '../../services/videos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'beyond-videos-list',
  templateUrl: './videos-list.component.html',
  styleUrls: ['./videos-list.component.scss']
})
export class VideosListComponent implements OnInit {

    videosData: any;

    constructor(private readonly videosService: VideosService,
                private readonly route: ActivatedRoute) {}

    ngOnInit() {
        this.videosData = this.route.snapshot.data.videosData;
    }

}
