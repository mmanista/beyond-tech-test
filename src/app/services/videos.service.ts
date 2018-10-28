import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

const youtubeApiBaseUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?';
const youtubeApiQueryParams = 'part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw';

@Injectable()
export class VideosService {
    constructor(private readonly http: HttpClient) {
    }

    getVideos(): Observable<any> {
        return this.http.get(youtubeApiBaseUrl + youtubeApiQueryParams).pipe(
            mergeMap((response: any) => {
                console.log('niesejwniente', response);
                return of(response);
            })
            //    should handle the errors here
        );
    }

    getNextPage(nextPageToken: string): Observable<any> {
        return this.http.get(youtubeApiBaseUrl + `pageToken=${nextPageToken}&` + youtubeApiQueryParams).pipe(
            mergeMap((response: any) => {
                console.info("O DRUGE", response);
                return of(response);
            })
        );
    }
}
