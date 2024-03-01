import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
  export class InputComponent {

 
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
