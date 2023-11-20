import { Component,OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ihome } from '../ihome';import { Router, RouterLink } from '@angular/router';
import { routes } from '../app.routes';
import { HomeSService } from '../home-s.service';


@Component({
  selector: 'app-check-homes',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './check-homes.component.html',
  styleUrl: './check-homes.component.css'
})
export class CheckHomesComponent implements OnInit {
  HomeId:any;
  constructor(private router: Router, public homeService:HomeSService) {}
  ngOnInit(): void {
    this.homes = this.homeService.getHomes();
  }

  onShowhomedetailsClick(id: number): void {
    this.router.navigate(['Homedetails', id]);
  }

  // homes: any[] = [
  //   {
  //     id: 1,
  //     home: 'assets/shashank.jpg',
  //     name: 'Shashanks home', // You need to provide an actual name value here
  //     des: 'best home in the world'
  //   },
  //   {
  //     id: 2,
  //     home: 'assets/darshan.jpg',
  //     name: 'Darshans home', // You need to provide an actual name value here
  //     des: 'best home in the world'
  //   }

  // ];

  homes: Ihome[] = [];

  
}
