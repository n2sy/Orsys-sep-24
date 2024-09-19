import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css',
})
export class AccueilComponent {
  constructor(private router: Router) {}

  goToCv() {
    //traiteement
    this.router.navigateByUrl('cv');
  }

  goToServers() {
    this.router.navigate(['servers']);
  }
}
