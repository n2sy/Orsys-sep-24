import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  private listeCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 25, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 57, 'directeur'),
    new Candidat(3, 'lisa', 'simpson', 21, 'designer', 'lisa.png'),
  ];

  getAllCandidats() {
    return this.listeCandidats;
  }
  getCandidatById(id) {
    return this.listeCandidats.find((cand) => cand.id == id);
  }

  addCandidat(newCand) {
    newCand.id = this.listeCandidats[this.listeCandidats.length - 1].id + 1;
    this.listeCandidats.push(newCand);
  }

  updateCandidat(uCand) {
    let i = this.listeCandidats.findIndex((cand) => cand.id == uCand.id);
    this.listeCandidats[i] = uCand;
  }

  deleteCandidat(dCand) {
    let i = this.listeCandidats.findIndex((cand) => cand.id == dCand.id);
    this.listeCandidats.splice(i, 1);
  }

  constructor() {}

  showInfos() {
    console.log('Je suis un service !!!!!!');
  }
}
