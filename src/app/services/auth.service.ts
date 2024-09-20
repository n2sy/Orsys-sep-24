import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  link = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  seConnecter(identifiants) {
    console.log(identifiants);

    return this.http.post(`${this.link}/login`, identifiants);
  }

  Inscription(identifiants) {}

  estConnecte() {}

  seDeconnecter() {}
}
