import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Orsys-Sep-24';
  prenom;

  traitementDuApp(msg) {
    alert(msg);
  }
}
