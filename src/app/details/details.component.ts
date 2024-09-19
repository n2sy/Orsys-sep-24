import { Component, inject, Input } from '@angular/core';
import { Candidat } from '../models/candidat';
import { GestionRecruesService } from '../services/gestion-recrues.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Input() targetCandidate: Candidat;
  private recrueService = inject(GestionRecruesService);

  addNewRecrue() {
    this.recrueService.addRecrue(this.targetCandidate);
  }
}
