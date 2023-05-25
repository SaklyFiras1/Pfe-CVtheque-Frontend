import { candidat } from './../Models/userann';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { prepostjob } from '../Models/prepostmodet';

@Injectable({
  providedIn: 'root'
})
export class DashbordService {
  url = environment.apiurl

  constructor(private httpclient: HttpClient) { }
  getdetails() {
    return this.httpclient.get(this.url + 'dashbord/usercounts')
  }
  getjobrequests(){
    return this.httpclient.get<prepostjob[]>(this.url+'/dashbordadmin/getannoncedemandes')
  }
  prepostjobrequests(id:any){
    return this.httpclient.get<prepostjob[]>(this.url+'/dashbordadmin/getjobannoncesbyid/'+id)
  }

  postjobreq(data:any,id:any):Observable<any>{
    return this.httpclient.post(this.url+'/dashbordadmin/postjobreq/'+id,data)

  }


  deletejob(id:any):Observable<any>{
    return this.httpclient.delete(this.url+'/dashbordadmin/deletejobbyid/'+id)
  }
  SendRefusereq(data:any){
    return this.httpclient.post(this.url+'/dashbordadmin/refuser',data)
  }
  refusjob(id:any,data:any):Observable<any>{
    return this.httpclient.patch(this.url+'/dashbordadmin/refusjob/'+id,data)
  }

  getcandidatsrequests(){
    return this.httpclient.get<candidat[]>(this.url+'/dashbordadmin/getannoncecandidats')
  }

  deletecandidatannonce(id:any):Observable<any>{
    return this.httpclient.delete(this.url+'/dashbordadmin/deletecandidatannonce/'+id)
  }
  getusers(){
    return this.httpclient.get(this.url+'/dashbordadmin/getusers')
  }

  getprofil(id:any){
    return this.httpclient.get(this.url+'/dashbordadmin/viewprofilbadge/'+id)
  }

  updatebadgeapproved(id:any ,data:any):Observable<any>{
    return this.httpclient.patch(this.url+'/dashbordadmin/badgeapproved/'+id,data)
  }
  updatebadgeexpert(id:any,data:any):Observable<any>{
    return this.httpclient.patch(this.url+'/dashbordadmin/badgeexpert/'+id,data)
  }
}
