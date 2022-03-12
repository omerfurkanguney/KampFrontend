import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe',
})
export class FilterPipePipe implements PipeTransform {
  transform(value: Product[], filterText: string): Product[] {
    //value = değiştirmek istediğimiz değer , parametre = filterText : dönüş tipi Product[]
    filterText = filterText ? filterText.toLocaleLowerCase() : ''; //büyük küçük harf duyarlı -- o yüzden küçük harfe çeviriyoruz
    return filterText //filter Text varsa  .filter ile ürünleri filtrele ama o şarta uyan (Product[] tek tek dolaşıyor foreach ile p:Product lambda gibi)
      ? value.filter(
          (p: Product) =>
            p.productName.toLocaleLowerCase().indexOf(filterText) !== -1 //indexOf varsa !== -1 den farklıysa dolaşıyor -- yoksa -1 oluyor varsa 1(veya başlangıç indexini verir) dolduruyor ve onun için atıyor
        )
      : value;
  }
}
