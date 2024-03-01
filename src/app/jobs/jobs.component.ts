import {Component, Input, OnInit} from '@angular/core';
import {JobsService} from '../service/jobs.service';
import {Jobs} from '../interface/jobs';
import {ThemeService} from '../theme.service';
import {ActivatedRoute} from '@angular/router';
import {inject} from "@angular/core";


@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.css'
})
export class JobsComponent implements OnInit {
  @Input() jobList: any[];
  JobList: any []=[];
  @Input() JobbList: any;
// jobs: number ;
  title = 'devjobs'
  // id: number;
  // company: string;
  // logo: string;
  // location: string;
  // position: string;
  // postedAt: string;
  // contract: string;
  router: ActivatedRoute = inject(ActivatedRoute);
  js: JobsService = inject(JobsService)

  constructor( public switchThemeService:ThemeService){}
  switchTheme() {
    //   if (this.darkLight) {
    //     this.darkLight = false
    //     console.log(this.darkLight)
    //     // debugger
    //   } else {
    //     // debugger
    //     this.darkLight = true
    //     console.log('else statement',this.darkLight)
    //   }
    // console.log("this.darkLight")
  }

  ngOnInit() {
    this.js.getJobs().subscribe((response) => {
      this.JobList = response;
      const jobs = Number(this.router.snapshot.params['id'])
      this.JobbList = this.JobList.find(response => response.id === jobs)
    })
    }


}





