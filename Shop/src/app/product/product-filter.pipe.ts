import { Pipe, PipeTransform } from '@angular/core';
import { Product } from './product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {
  transform(value: Product[], filter: any): Product[] {
    if (filter && filter != "") {
      let filterText: string = new String(filter).toLocaleLowerCase().toString();
      return value.filter((p) =>
        p.name.toLocaleLowerCase().indexOf(filterText) != -1)
    }
    return value;
  }

}
