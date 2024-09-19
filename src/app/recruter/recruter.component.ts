import { Component } from '@angular/core';
import { GestionRecruesService } from '../services/gestion-recrues.service';
import { Candidat } from '../models/candidat';

@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrl: './recruter.component.css',
})
export class RecruterComponent {
  tabRecrues: Candidat[] = [];
  constructor(private candService: GestionRecruesService) {}

  ngOnInit() {
    this.tabRecrues = this.candService.getAllRecrues();
  }
}
