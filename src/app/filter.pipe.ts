import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value.length == 0) {
      return null
    }

    const searchString = args.toString().toLowerCase();
    debugger
    var returnValue = value.filter(function (item: any) {
      var searchValue = JSON.stringify(item.organizerName).toLowerCase().includes(searchString) || item.price < searchString;
      return searchValue;
    });

    if (returnValue.length == 0) {
      alert('No result found');
    }

    return returnValue;

  }

}
