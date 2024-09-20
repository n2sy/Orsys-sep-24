import { Component } from '@angular/core';
import { map, Observable, Observer, Subscription, throttleTime } from 'rxjs';

@Component({
  selector: 'app-exp-obs',
  templateUrl: './exp-obs.component.html',
  styleUrl: './exp-obs.component.css',
})
export class ExpObsComponent {
  inscription: Subscription;
  myObs$: Observable<number> = new Observable((observer: Observer<number>) => {
    let count = 0;
    setInterval(() => {
      count++;
      observer.next(count);
    }, 1000);
  }).pipe(
    map((val) => val * 100),
    //skip(5),
    throttleTime(3000)
  );
  // myObs$: Observable<string> = new Observable((observer: Observer<string>) => {
  //   setTimeout(() => {
  //     observer.next('First package');
  //   }, 2000);
  //   setTimeout(() => {
  //     observer.next('Second package');
  //   }, 4000);
  //   setTimeout(() => {
  //     observer.error(new Error('Erreur provoquée'));
  //   }, 6000);
  //   setTimeout(() => {
  //     observer.next('Third package');
  //   }, 8000);
  //   setTimeout(() => {
  //     observer.complete();
  //   }, 10000);
  // });

  ngOnInit() {
    this.inscription = this.myObs$.subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log('ORSYS', err);
      },
      complete: () => {
        console.log('Flux fermée');
      },
    });
  }

  ngOnDestroy() {
    this.inscription.unsubscribe();
  }
}
