import { Resolve } from '@angular/router';
import { Injectable } from '@angular/core';
import { VideosService } from '../../services/videos.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class VideosListResolver implements Resolve<any> {
    constructor(private videosService: VideosService) {}

    resolve(): any {
        return this.videosService.getVideos()
            .pipe(catchError((error) => of(error))
        );
    }
}
