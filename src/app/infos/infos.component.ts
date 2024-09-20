import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { GestionCandidatsService } from '../services/gestion-candidats.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  candidateToShow: Candidat;
  constructor(
    private actRoute: ActivatedRoute,
    private candSer: GestionCandidatsService,
    private router: Router
  ) {}

  // ngOnChanges() {
  //   //console.log(this.actRoute.snapshot.params['id']);
  //   this.myId = this.actRoute.snapshot.paramMap.get('id');
  // }

  ngOnInit() {
    // 1ere méthodes avec Snapshot
    //console.log(this.actRoute.snapshot.params['id']);
    //this.myId = this.actRoute.snapshot.paramMap.get('id');

    //2ème méthode avec Snapshot
    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.candidateToShow = this.candSer.getCandidatById(p.get('id'));
      },
      // error : () => {

      // },
      // complete : () => {

      // }
    });
  }

  onDelete() {
    if (confirm('Etes-vous sûr de vouloir supprimer ce candidat ?')) {
      this.candSer.deleteCandidat(this.candidateToShow);
      this.router.navigateByUrl('/cv');
    }
  }
}
