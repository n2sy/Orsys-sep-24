import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';

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

  constructor(private authSer: AuthService) {}
  onSubmit(f) {
    //console.log(f);
    this.authSer.seConnecter(f.value).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
        this.showError = true;
        f.reset();
      },
    });
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
