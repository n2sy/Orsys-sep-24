import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GestionServersService {
  tabServers = [
    {
      id: 1,
      nom: 'Matthieu Server',
      statut: 'online',
    },
    {
      id: 2,
      nom: 'Amal Server',
      statut: 'offline',
    },
    {
      id: 3,
      nom: 'Guillaume Server',
      statut: 'online',
    },
  ];

  getServerById(id) {
    return this.tabServers.find((serv) => serv.id == id);
  }

  constructor() {}
}
