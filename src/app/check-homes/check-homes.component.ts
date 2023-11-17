import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ihome } from '../ihome';

@Component({
  selector: 'app-check-homes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './check-homes.component.html',
  styleUrl: './check-homes.component.css'
})
export class CheckHomesComponent {
  homes: Ihome[] = [
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
