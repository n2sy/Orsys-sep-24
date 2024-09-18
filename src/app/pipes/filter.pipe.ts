import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], selStatus: string): any[] {
    if (!selStatus.length) return value;
    else {
      // let newTab = [];
      // for (const serveur of value) {
      //   if (serveur['statut'] == selStatus) newTab.push(serveur);
      // }
      // return newTab;
      return value.filter((serveur) => serveur['statut'] == selStatus);
    }
  }
}
