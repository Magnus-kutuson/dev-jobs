import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }
  jobId: any
  myJobs: any
  private baseUrl = 'http://localhost:3000'




  getJobs():Observable <any>{
    return this.http.get(`${this.baseUrl}/jobs`)

}

z


// getJobsId(id:number){
//  return this.myJobs.find((response) => {
//   response.id === id
//  })

// }

}
