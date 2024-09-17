import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
})
export class FirstComponent {
  prenom: string = 'Matthieu';
  bgColor: string = 'blue';

  traitement() {
    alert("J'ai été cliqué");
  }

  changerPrenom(inputElement) {
    this.prenom = inputElement.value;
    this.prenom = this.prenom.toUpperCase();
  }

  traitementDuParent(lettre) {
    this.prenom = lettre;
  }
}
