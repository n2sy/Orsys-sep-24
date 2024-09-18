import { Component } from '@angular/core';

@Component({
  selector: 'app-home-account',
  templateUrl: './home-account.component.html',
  styleUrl: './home-account.component.css',
})
export class HomeAccountComponent {
  tabAccounts = [
    {
      nom: 'Marie Account',
      statut: 'active',
    },
    {
      nom: 'Matthieu Account',
      statut: 'inactive',
    },
  ];

  addAccount(newAccount) {
    this.tabAccounts.push(newAccount);
  }
}
