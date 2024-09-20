import { Injectable } from '@angular/core';
import { Candidat } from '../models/candidat';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GestionCandidatsService {
  link = 'http://localhost:3000/cv/candidats';

  constructor(private http: HttpClient) {}
  private listeCandidats: Candidat[] = [
    new Candidat(1, 'bart', 'simpson', 25, 'ingénieur', 'bart.jpeg'),
    new Candidat(2, 'homer', 'simpson', 57, 'directeur'),
    new Candidat(3, 'lisa', 'simpson', 21, 'designer', 'lisa.png'),
  ];

  getAllCandidats() {
    return this.listeCandidats;
  }

  getAllCandidatsAPI(): Observable<Candidat[]> {
    return this.http.get<Candidat[]>(this.link);
  }
  getCandidatById(id) {
    return this.listeCandidats.find((cand) => cand._id == id);
  }
  getCandidatByIdAPI(id) {
    return this.http.get(`${this.link}/${id}`);
  }

  addCandidatAPI(newCand) {
    return this.http.post(`${this.link}/free`, newCand);
  }

  uploadAvatar(f: FormData) {
    return this.http.post('http://localhost:3000/images/upload', f);
  }

  addCandidat(newCand) {
    newCand.id = this.listeCandidats[this.listeCandidats.length - 1]._id + 1;
    this.listeCandidats.push(newCand);
  }

  updateCandidat(uCand) {
    let i = this.listeCandidats.findIndex((cand) => cand._id == uCand.id);
    this.listeCandidats[i] = uCand;
  }

  updateCandidatAPI(uCand) {
    return this.http.put(`${this.link}/free/${uCand._id}`, uCand);
  }

  deleteCandidat(dCand) {
    let i = this.listeCandidats.findIndex((cand) => cand._id == dCand.id);
    this.listeCandidats.splice(i, 1);
  }

  deleteCandidatAPI(id) {
    return this.http.delete(`${this.link}/free/${id}`);
  }

  showInfos() {
    console.log('Je suis un service !!!!!!');
  }
}
