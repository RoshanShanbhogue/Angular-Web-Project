import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitWords'
})
export class SplitPipe implements PipeTransform {

  transform(value: string, arg1: number, arg2: string): any {
    if(arg1 == null)
      arg1 = 30;
    if(arg2 == null)
      arg2 = " ";

    return value.split(arg2).slice(0, arg1).join(" ") + "...";
  }

}
