import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'textEllipsis'})
export class TextEllipsisPipe implements PipeTransform {
    transform(text: string, limitTo = 150) {
        return text.length > 150 ? (text.substring(0, limitTo).trim() + '...') : text;
    }
}
