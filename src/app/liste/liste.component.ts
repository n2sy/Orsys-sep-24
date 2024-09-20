import { Component, EventEmitter, Output } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
  // providers: [GestionCandidatsService],
})
export class ListeComponent {
  allCandidats: Candidat[] = [];
  @Output() eventToCv = new EventEmitter();

  constructor(private candSer: GestionCandidatsService) {}

  ngOnInit() {
    this.candSer.getAllCandidatsAPI().subscribe({
      next: (data) => {
        this.allCandidats = data;
      },
      error: (err) => {
        console.log('Erreur avec GET');
        alert('API inaccessible. Données fictives !');
        this.allCandidats = this.candSer.getAllCandidats();
      },
    });
  }

  sendCandidateToCv(clickedCandidate) {
    this.eventToCv.emit(clickedCandidate);
  }

  // showCandidates() {
  //   console.log(this.candSer.getAllCandidats());
  // }
}
