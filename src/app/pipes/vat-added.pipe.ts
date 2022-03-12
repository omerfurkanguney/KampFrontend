import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vatAdded'   //Pipe elimizdeki veriyi görsel olarak daha farklı göstermek için kullanılır.
})
export class VatAddedPipe implements PipeTransform {

  transform(value: number, rate:number): number {
    return value + (value*rate/100);
  }

}
