import { Pipe, PipeTransform } from '@angular/core';

/* filter videos to show in the list (public only) */
@Pipe({name: 'publicVideosOnly'})
export class PublicVideosOnlyPipe implements PipeTransform {
    transform(videosList: any[]) {
        return videosList.filter(singleVideo => singleVideo.status.privacyStatus === 'public');
    }
}
