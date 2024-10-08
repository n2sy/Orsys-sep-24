import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  link = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  seConnecter(identifiants) {
    return this.http.post(`${this.link}/login`, identifiants);
  }

  Inscription(identifiants) {
    return this.http.post(`${this.link}/register`, identifiants);
  }

  estConnecte() {
    let token = localStorage.getItem('access_token');
    return !!token;
  }

  seDeconnecter() {
    localStorage.removeItem('access_token');
  }
}
