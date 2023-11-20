import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSService } from '../home-s.service';
import { Observable, switchMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Ihome } from '../ihome';

@Component({
  selector: 'app-homedetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './homedetails.component.html',
  styleUrls: ['./homedetails.component.css']
})
export class HomedetailsComponent implements OnInit {
  HomeId!: number;
  Home: Ihome | undefined;

  constructor(private homeS: HomeSService, private route: ActivatedRoute) {}

  ngOnInit() {
    debugger
    this.route.paramMap
      .pipe(
        switchMap(params => {
          this.HomeId = +params.get('id')!;
          return this.gethomeDetails(this.HomeId);
        })
      )
      .subscribe(home => {
        this.Home = home;
      });
  }

  gethomeDetails(homeId: number): Observable<Ihome | undefined> {
    alert("fetching data from service")
    return this.homeS.getHomeById(homeId);
  }
}
