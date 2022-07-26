import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPipe'
})
export class ProductPipePipe implements PipeTransform {

  transform(value: any[], filterText: string): any[] {
    if (filterText == "" || filterText == null) {
      return value;
    }

    return value.filter(p => {
      const name = p.name.toLowerCase().includes(filterText.toLowerCase())
      return (name)
    });
  }

}

