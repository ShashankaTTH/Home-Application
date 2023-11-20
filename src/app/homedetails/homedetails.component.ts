import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeSService } from '../home-s.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Ihome } from '../ihome';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-homedetails',
  templateUrl: './homedetails.component.html',
  styleUrls: ['./homedetails.component.css']
})
export class HomedetailsComponent implements OnInit {
  home:Ihome|null=null;
 

  constructor(private router: Router,private activatedRoute: ActivatedRoute, private homeService: HomeSService) { }


  ngOnInit():void{
    const homeId= parseInt(this.activatedRoute.snapshot.paramMap.get('id')!,10);
    this.home = this.homeService.getHomeById(homeId);
  
  }
}
