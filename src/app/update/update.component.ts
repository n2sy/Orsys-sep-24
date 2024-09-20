import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Candidat } from '../models/candidat';
import { GestionCandidatsService } from '../services/gestion-candidats.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {
  candidateToUpdate: Candidat;
  constructor(
    private actRoute: ActivatedRoute,
    private candSer: GestionCandidatsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.candidateToUpdate = this.candSer.getCandidatById(p.get('id'));
      },
    });
  }

  onSubmit(fValue) {
    fValue.id = this.candidateToUpdate.id;
    this.candSer.updateCandidat(fValue);
    this.router.navigateByUrl('/cv');
  }
}
