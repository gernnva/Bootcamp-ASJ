import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'miPipe',
})
export class MiPipePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    const primos = [];
    for (let index = 0; index < value.length; index++) {
      const element = value[index];
      let esPrimo = true;
      for (let i = 2; i <= Math.sqrt(element); i++) {
        if (element % i === 0) {
          esPrimo = false;
          break;
        }
      }
      if (esPrimo) {
        primos.push(element);
      }
    }
    return primos;
  }
}