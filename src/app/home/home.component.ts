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
  inputTitle = '';
  inputLocation ='';
  defaultList: Jobs[];
  jobList: Jobs [];
  constructor(public js: JobsService, public switchThemeService:ThemeService){}

  

ngOnInit(){
  this.js.getJobs().subscribe((response)=>{
    this.defaultList = response
    this.jobList = this.defaultList;
    // console.log(this.defaultList)
  })

  

}
}
