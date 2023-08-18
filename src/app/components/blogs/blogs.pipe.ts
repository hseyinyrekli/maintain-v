import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'blogs',
})
export class BlogsPipe implements PipeTransform {
  transform(value: any[], search: any) {
    if (!search) {
      return value;
    }

    const searchRegex = new RegExp(search, 'i');

    return value.filter((p) => searchRegex.test(p.name));
  }
}
