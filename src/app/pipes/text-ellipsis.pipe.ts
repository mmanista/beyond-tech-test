import { Pipe, PipeTransform } from '@angular/core';

/* text ellipsis pipe.
* Limit the maximum amount of characters displayed in a string
* to the limitTo value (150 by default) and add trailing ellipsis */
@Pipe({name: 'textEllipsis'})
export class TextEllipsisPipe implements PipeTransform {
    transform(text: string, limitTo = 150) {
        return text.length > 150 ? (text.substring(0, limitTo).trim() + '...') : text;
    }
}
