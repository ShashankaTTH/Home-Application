import { Injectable } from '@angular/core';
import { Ihome } from './ihome';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeSService {

  
 private homes: Ihome[] = [
    {
      id: 1,
      home: 'assets/shashank.jpg',
      name: 'Shashanks home',
      des: 'best home in the world',
      owner: 'shashank',
      location: 'kollegala',
      contact: 100
    },
    {
      id: 2,
      home: 'assets/darshan.jpg',
      name: 'Darshans home',
      des: 'best home in the world',
      owner: 'darshan',
      location: 'statebank',
      contact: 200
    }
  ];

  constructor() { }

  getHomeById(id: number): Observable<Ihome | undefined> {
    alert("Hitting service")
    const foundHome = this.homes.find(home => home.id === id);
    return of(foundHome);
  }
}
