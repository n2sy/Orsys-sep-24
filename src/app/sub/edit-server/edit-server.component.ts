import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GestionServersService } from '../gestion-servers.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrl: './edit-server.component.css',
})
export class EditServerComponent {
  selectedServer;
  constructor(
    private actRoute: ActivatedRoute,
    private serverService: GestionServersService
  ) {}

  ngOnInit() {
    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.selectedServer = this.serverService.getServerById(p.get('id'));
      },
    });
  }
}
