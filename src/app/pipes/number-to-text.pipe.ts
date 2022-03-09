import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberToText'
})
export class NumberToTextPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let text = '';

    switch (value) {
      case 1:
        text = 'uno';
        break;

        case 2:
          text = 'dos';
          break;

          case 3:
        text = 'tres';
        break;

        case 4:
        text = 'cuatro';
        break;

        case 5:
        text = 'cinco';
        break;

        case 6:
        text = 'seis';
        break;

        case 7:
        text = 'siete';
        break;

        case 8:
        text = 'ocho';
        break;

        case 9:
        text = 'nueve';
        break;

        case 10:
        text = 'diez';
        break;
    
      default:
        break;
    }
    return text;
  }

}
