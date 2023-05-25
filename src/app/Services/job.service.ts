import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
import { job } from '../Models/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  url = environment.apiurl
  id:any
  jobtitle: any;
data:any
  constructor(private httpClient: HttpClient) { }

  getjob() {
    return this.httpClient.get<job[]>(this.url + '/jobs/getjobss')

  }
  getjobid(){
    return this.httpClient.get<job[]>(this.url+'/jobs/jobid')
  }
  getjobbyid(id:any){
    return this.httpClient.get<job[]>(this.url+'/jobs/getjobbyid/'+id)
  }
 postingjob(data:any){
   return this.httpClient.post(this.url+'/jobs/add',data)
 }

  updatejob() {

  }
  deletejob() {

  }
  addjob() { }

}
