import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()
export class VideosService {
    constructor(private readonly http: HttpClient) {
    }

    private readonly youtubeApiUrls = {
        base: 'https://www.googleapis.com/youtube/v3/',
        playlistItems: {
            url: 'playlistItems?',
            additionalQueryParams: 'part=snippet,contentDetails,status&maxResults=10&playlistId=PLSi28iDfECJPJYFA4wjlF5KUucFvc0qbQ'
        },
        videos: {
            url: 'videos?id=',
            additionalQueryParams: '&part=snippet,contentDetails,statistics'
        },
        apiKey: 'key=AIzaSyCuv_16onZRx3qHDStC-FUp__A6si-fStw'
    };

    static getPageTokenQueryParam(pageToken: string) {
        return pageToken ? `pageToken=${pageToken}&` : '';
    }

    private getYoutubePlaylistApiUrl(pageToken: string): string {
        return this.youtubeApiUrls.base +
            this.youtubeApiUrls.playlistItems.url +
            VideosService.getPageTokenQueryParam(pageToken) +
            this.youtubeApiUrls.playlistItems.additionalQueryParams +
            '&' +
            this.youtubeApiUrls.apiKey;
    }

    private getYoutubeVideosApiUrl(videoId: string): string {
        return this.youtubeApiUrls.base +
            this.youtubeApiUrls.videos.url +
            videoId +
            this.youtubeApiUrls.videos.additionalQueryParams +
            '&' +
            this.youtubeApiUrls.apiKey;
    }

    /* get videos by page token. The initial load will take place without a page token specified
    * (using the API endpoint defined in the task description). After the initial load, we store
    * the current page token in session storage, so we can stay on the same page after refreshing
    * and also go back to the correct page from the "play video" view */
    getVideosPage(pageToken: string): Observable<any> {
        return this.http.get(this.getYoutubePlaylistApiUrl(pageToken)).pipe(
            mergeMap((response: any) => {
                // if it's not an initial load (page token available) - save it in session storage
                if (pageToken) {
                    sessionStorage.currentPageToken = pageToken;
                }
                return of(response);
            })
            //    should handle the errors here
        );
    }

    getSingleVideoData(videoId: string): Observable<any> {
        return this.http.get(this.getYoutubeVideosApiUrl(videoId)).pipe(
            mergeMap((response: any) => {
                return of(response);
            })
        );
    }
}
