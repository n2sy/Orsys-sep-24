import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrl: './liste.component.css',
})
export class ListeComponent {
  @Input() allCandidats: Candidat[] = [];
  @Output() eventToCv = new EventEmitter();

  sendCandidateToCv(clickedCandidate) {
    this.eventToCv.emit(clickedCandidate);
  }
}
