import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  title = 'devjobs'

  
 
  constructor( public switchThemeService:ThemeService){}
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
    console.log("this.darkLight")
    


}

}