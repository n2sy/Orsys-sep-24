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

  addCandidat() {
    this.listeCandidats.push(
      new Candidat(3, 'NEW', 'CANDIDAT', 21, 'designer', 'lisa.png')
    );
  }
  constructor() {}

  showInfos() {
    console.log('Je suis un service !!!!!!');
  }
}
