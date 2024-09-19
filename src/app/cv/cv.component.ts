import { Component } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { GestionRecruesService } from '../services/gestion-recrues.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
  //providers: [GestionCandidatsService],
  providers: [GestionRecruesService],
})
export class CvComponent {
  tabCandidats: Candidat[] = [];
  selectedCandidate: Candidat;

  constructor(private candService: GestionCandidatsService) {}

  //private candService = inject(GestionCandidatsService);

  ngOnInit() {
    this.tabCandidats = this.candService.getAllCandidats();
  }

  getClickedCandidate(cand) {
    this.selectedCandidate = cand;
  }

  // onAddCandidate() {
  //   this.candService.addCandidat();
  // }

  // showCandidates() {
  //   console.log(this.candService.getAllCandidats());
  // }
}
