import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GestionServersService } from '../gestion-servers.service';

@Component({
  selector: 'app-info-server',
  templateUrl: './info-server.component.html',
  styleUrl: './info-server.component.css',
})
export class InfoServerComponent {
  selectedServer;
  disabledBtn;
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

    this.actRoute.queryParamMap.subscribe({
      next: (q: ParamMap) => {
        this.disabledBtn = q.get('allowEdit') == '1' ? false : true;
      },
    });
  }
}
