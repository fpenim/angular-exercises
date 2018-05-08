import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(title: string): any {
    if(!title) return null;

    let prepositions = [
      "the", "of", "at"
    ];

    let words = title.split(' ');
    let formattedTitle = "";
    for(var i = 0; i < words.length; i++) {
      if(prepositions.includes(words[i])) {
        words[i] = words[i].toLowerCase();
      } else {
        // TODO
      }
    }
    return words.join(' ');
  }

}
