import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ihome } from '../ihome';import { Router } from '@angular/router';


@Component({
  selector: 'app-check-homes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-homes.component.html',
  styleUrl: './check-homes.component.css'
})
export class CheckHomesComponent {
  HomeId:any;
  constructor(private router: Router) {}


 onShowhomedetailsClick(HomeId: any): void {
  this.router.navigate(['Homedetails', HomeId]);
  alert("home id is "+ HomeId)
 }

  homes: any[] = [
    {
      id: 1,
      home: 'assets/shashank.jpg',
      name: 'Shashanks home', // You need to provide an actual name value here
      des: 'best home in the world'
    },
    {
      id: 2,
      home: 'assets/darshan.jpg',
      name: 'Darshans home', // You need to provide an actual name value here
      des: 'best home in the world'
    }

  ];

  
}
