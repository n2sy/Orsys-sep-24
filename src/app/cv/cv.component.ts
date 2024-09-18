import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  tabCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 25, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 57, 'directeur'),
    new Candidat(3, 'lisa', 'simpson', 21, 'designer', 'lisa.png'),
  ];
  selectedCandidate: Candidat;

  getClickedCandidate(cand) {
    this.selectedCandidate = cand;
  }
}
