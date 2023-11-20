import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

export interface Ihome {
  id: number;
  home: string;
  name: string;
  des: string;
  owner: string;
  location: string;
  contact: number;
}

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

  getHomes(): Ihome[] {
    return this.homes;
  }

  getHomeById(id: number): Ihome {
    return this.homes.find(home => home.id === id)!;
  }

  // getHomeById(id: number): Observable<Ihome | undefined> {
  //   const home = this.homes.find((h) => h.id === id);
  //   return of(home);
  // }
}
