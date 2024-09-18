import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item-account',
  templateUrl: './item-account.component.html',
  styleUrl: './item-account.component.css',
})
export class ItemAccountComponent {
  @Input() account;

  changeStatus(statusChanged) {
    this.account.statut = statusChanged;
  }
}
