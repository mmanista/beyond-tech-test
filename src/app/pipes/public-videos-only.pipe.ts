import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'publicVideosOnly'})
export class PublicVideosOnlyPipe implements PipeTransform {
    transform(videosList: any[]) {
        return videosList.filter(singleVideo => singleVideo.status.privacyStatus === 'public');
    }
}
