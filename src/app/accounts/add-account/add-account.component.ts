import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrl: './add-account.component.css',
})
export class AddAccountComponent {
  allStatus = ['', 'active', 'inactive', 'unknown'];
  // newName: string = '';
  // newStatus: string = '';
  @Output() eventToHome = new EventEmitter();

  onAddAccount(newName, newStatus) {
    console.log(newName, newStatus);

    this.eventToHome.emit({
      nom: newName,
      statut: newStatus,
    });
  }
}
