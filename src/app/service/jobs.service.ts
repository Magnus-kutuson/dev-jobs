import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  private enteredTitle = new BehaviorSubject<string>('');
  getTitle = this.enteredTitle.asObservable();
  searchQuery1: string = '';
  private enteredLocation = new BehaviorSubject<string>('');
  getLocation = this.enteredLocation.asObservable();
  searchQuery2: string;

  constructor(private http: HttpClient) { }
  jobId: any
  myJobs: any
  private baseUrl = 'http://localhost:3000'


  searchTitle(searchQuery1){
    this.enteredTitle.next(searchQuery1)
  }
  searchLocation(searchQuery2){
    this.enteredTitle.next(searchQuery2)
  }


  getJobs():Observable <any>{
    return this.http.get(`${this.baseUrl}/jobs`)

}




// getJobsId(id:number){
//  return this.myJobs.find((response) => {
//   response.id === id
//  })

// }

}
