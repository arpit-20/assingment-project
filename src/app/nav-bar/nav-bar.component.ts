import { Component, OnInit } from '@angular/core';
import { ApplicationServiceService } from '../application-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private api:ApplicationServiceService) { }

  ngOnInit(): void {
    this.api.getTaskInfo().subscribe((data)=>{
      console.log(data);

    },(err)=>{})
  }

}
