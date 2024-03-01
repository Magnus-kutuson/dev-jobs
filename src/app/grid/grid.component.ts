import { Component,Input} from '@angular/core';
import { Jobs } from '../interface/jobs';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent  {
  @Input() jobList : Jobs

  constructor(private router: Router, public switchThemeService:ThemeService){}
  switchTheme(){
    //   if (this.darkLight) {
    //     this.darkLight = false
    //     console.log(this.darkLight)
    //     // debugger
    //   } else {
    //     // debugger
    //     this.darkLight = true
    //     console.log('else statement',this.darkLight)
    //   }
   
  }
  

  link(jobList){
    this.router.navigate (["/jobs",jobList])
    
  }
  // jobs =['Scoot', 'Blogr', 'Vector', 'Office lite', 'Pod', 'Creative', 'Pomodoro', 'Maker', 'Coffeeroaster', 'Mastercraft', 'Crowdfund', 'Typemaster'];
}




