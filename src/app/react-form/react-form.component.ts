import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form',
  templateUrl: './react-form.component.html',
  styleUrl: './react-form.component.css',
})
export class ReactFormComponent {
  signUpForm: FormGroup;

  ngOnInit() {
    this.signUpForm = new FormGroup({
      username: new FormControl('nidhal', Validators.required),
      addrMail: new FormControl('', [Validators.email, Validators.required]),
      skills: new FormArray([]),
    });
  }

  get formSkills() {
    return <FormArray>this.signUpForm.get('skills');
  }

  addSkill() {
    let ctrl = new FormControl('', Validators.required);
    this.formSkills.push(ctrl);
  }

  onSubmit() {
    console.log(this.signUpForm.value);
  }
}
