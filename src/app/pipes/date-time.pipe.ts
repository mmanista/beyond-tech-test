import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({name: 'dateTime'})
export class DateTimePipe implements PipeTransform {
    transform(dateTimeString: string, format = 'MMM DD, YYYY') {
        return moment(dateTimeString).format(format);
    }
}
