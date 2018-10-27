import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

const youtubeApiUrl = 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ&key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw';

@Injectable()
export class VideosService {
    imagesData: any;
    constructor(private readonly http: HttpClient) {
    }

    getImages(): Observable<any> {
        if (this.imagesData) {
            console.log('ZWRACAM SEJVNIENTE');
            return this.imagesData;
        } else {
            return this.http.get(youtubeApiUrl).pipe(
                mergeMap((response: any) => {
                    console.log('niesejwniente', response);
                    this.imagesData = response;
                    return of(response);
                })
                //    should handle the errors here
            );
        }
    }
}
