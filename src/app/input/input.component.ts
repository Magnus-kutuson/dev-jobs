import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { ITEMS } from '../mock-data';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { JobsService } from '../service/jobs.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
  export class InputComponent {
    // searchQuery = '';
    // searchResults = [];
      searchQuery1: string = '';
      searchQuery2: string = '';
      searched: boolean = false;
    
      search(e:any) {
        // if (this.searchQuery1 && this.searchQuery2) {
        //   // Perform search logic here if both inputs are filled
        //   console.log('Searching for:', this.searchQuery1, 'and', this.searchQuery2);
        //   this.searched = true;
        // } else {
        //   alert('Please fill both input fields before searching.');
        // }
          // this.jobService.searchTitle(e.value);
          // this.jobService.searchLocation(e.value);
          this.jobService.searchQuery1 = this.searchQuery1
          this.jobService.searchQuery2 = this.searchQuery2


      }
 
  constructor( public switchThemeService:ThemeService, public jobService: JobsService){}
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
