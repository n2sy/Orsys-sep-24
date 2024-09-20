import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  listeCompetences = ['', 'java', 'php', 'python'];
  myComment = 'Rien à signaler...';

  defaultComptence = 'php';
  showError = false;
  showRegister = false;

  constructor(private authSer: AuthService, private router: Router) {}
  onLogin(f) {
    //console.log(f);
    this.authSer.seConnecter(f.value).subscribe({
      next: (response) => {
        alert(response['message']);
        localStorage.setItem('access_token', response['token']);
        this.router.navigateByUrl('/cv');
      },
      error: (err) => {
        console.log(err);
        this.showError = true;
        f.reset();
      },
    });
  }
  onRegister(f) {
    //console.log(f);
    this.authSer.Inscription(f.value).subscribe({
      next: (response) => {
        alert(response['message']);
        this.toggleShowRegister();
        f.reset();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  toggleShowRegister() {
    this.showRegister = !this.showRegister;
  }

  onReset(f: NgForm) {
    f.reset();
  }

  modifierForm(f: NgForm) {
    f.form.patchValue({
      login: '',
      password: '',
      erreurs: 'Matthieu',
    });
  }
}
