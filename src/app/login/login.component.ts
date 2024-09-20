import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  listeCompetences = ['', 'java', 'php', 'python'];
  myComment = 'Rien à signaler...';

  defaultComptence = 'php';
  onSubmit(f) {
    console.log(f);
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
