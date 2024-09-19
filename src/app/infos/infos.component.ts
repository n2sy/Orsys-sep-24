import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrl: './infos.component.css',
})
export class InfosComponent {
  myId;
  constructor(private actRoute: ActivatedRoute) {}

  // ngOnChanges() {
  //   //console.log(this.actRoute.snapshot.params['id']);
  //   this.myId = this.actRoute.snapshot.paramMap.get('id');
  // }

  ngOnInit() {
    // 1ere méthodes avec Snapshot
    //console.log(this.actRoute.snapshot.params['id']);
    //this.myId = this.actRoute.snapshot.paramMap.get('id');

    //2ème méthode avec Snapshot
    this.actRoute.paramMap.subscribe({
      next: (p: ParamMap) => {
        this.myId = p.get('id');
      },
      // error : () => {

      // },
      // complete : () => {

      // }
    });
  }
}
