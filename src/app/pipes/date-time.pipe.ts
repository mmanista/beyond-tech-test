import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

/* format the date/time string to a human-readable version.
 * For a wider use, I could create a service/enum with various formats,
 * but for now, I think it's fine to pass it as a "raw" param */
@Pipe({name: 'dateTime'})
export class DateTimePipe implements PipeTransform {
    transform(dateTimeString: string, format = 'MMM DD, YYYY') {
        return moment(dateTimeString).format(format);
    }
}
