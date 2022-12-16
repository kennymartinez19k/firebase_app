import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekDay'
})
export class WeekDayPipe implements PipeTransform {

  constructor() { }

  transform(value: Date, ...args: unknown[]): unknown {
    return;
  }

}
