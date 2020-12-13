import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showStars',
})
export class ShowStarsPipe implements PipeTransform {
  transform(amount: number): any {
    let stars = '';
    for (let index = 0; index < amount; index++) {
      stars += '★';
    }
    return stars;
  }
}
