import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calPipe'
})
export class CalPipePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return null;
  }

}
