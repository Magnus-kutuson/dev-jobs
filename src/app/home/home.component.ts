//  
import { Component, OnInit } from '@angular/core';
import { JobsService} from '../service/jobs.service';
import { Jobs } from '../interface/jobs';
import { NgFor } from '@angular/common';
import { GridComponent } from '../grid/grid.component';
import { HeaderComponent } from '../header/header.component';
import { ThemeService } from '../theme.service';

@Component({  
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})
export class HomeComponent implements OnInit {
  
  constructor(private js: JobsService, public switchThemeService:ThemeService){}
  jobList: Jobs []=[];
  

ngOnInit(){
  this.js.getJobs().subscribe((response)=>{
    this.jobList = response;
    

    
  })
}
}
