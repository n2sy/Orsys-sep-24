import { Component } from '@angular/core';

@Component({
  selector: 'app-ms-word',
  templateUrl: './ms-word.component.html',
  styleUrl: './ms-word.component.css',
})
export class MsWordComponent {
  listFonts = ['', 'Arial', 'Phosphate', 'Garamond'];
  bgColor;
  txtColor;
  txtSize;
  txtFont;

  changeSize(newSize) {
    let unite = prompt('Veuillez saisir une unité');
    this.txtSize = `${newSize}${unite}`;
  }
}
