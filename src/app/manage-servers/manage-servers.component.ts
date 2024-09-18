import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-servers',
  templateUrl: './manage-servers.component.html',
  styleUrl: './manage-servers.component.css',
})
export class ManageServersComponent {
  allServers = [
    {
      nom: 'production server',
      type: 'small',
      date_d: new Date(5, 6, 23),
      statut: 'critical',
    },
    {
      nom: 'development testing server',
      type: 'large',
      date_d: new Date(3, 9, 24),
      statut: 'stable',
    },
    {
      nom: 'development server',
      type: 'medium',
      date_d: new Date(),
      statut: 'offline',
    },
    {
      nom: 'nidhal server',
      type: 'small',
      date_d: new Date(),
      statut: 'stable',
    },
  ];

  affecterClass(st) {
    return {
      'list-group-item-success': st == 'stable',
      'list-group-item-danger': st == 'critical',
      'list-group-item-warning': st == 'offline' ? true : false,
    };
  }
}
