import { observable, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { JobService } from './job.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { userprofil } from '../Models/profilModel';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.apiurl;
  id=this.route.snapshot.params['id']

  constructor(private httpclient: HttpClient,private JobService:JobService,private route:ActivatedRoute) { }
  signup(data: any) {
    return this.httpclient.post(this.url + "/user/signup", data, {
      headers: new HttpHeaders().set('content-type', 'application/json')
    })
  }
  signin(data: any) {

    return this.httpclient.post(this.url + "/user/Login/", data, {
      headers: new HttpHeaders().set("content-type", "application/json")
    })
  }
  forgetpassword(data: any) {
    return this.httpclient.post(this.url + "/user/forgetpassword", data, {
      headers: new HttpHeaders().set('content-type', 'application/json')
    })
  }

  changepassword(data: any) {
    return this.httpclient.post(this.url + '/user/changepassword', data

    )

  }
  checktoken(){
    return this.httpclient.get(this.url+'/user/checktoken/')
  }
  postcommentaire(id:any,commentaire:any){
    return this.httpclient.post(this.url+'/jobs/comment/'+id,commentaire)
    }

  getcommentaire(id:any):Observable<any>{
    return this.httpclient.get(this.url+'/jobs/comme/'+id)
  }
  getcurrentuser(){
    return this.httpclient.get(this.url + '/user/getcurrentuser');
  }
  updateprofil(data:any){
    return this.httpclient.patch(this.url+'/user/updateprof',data)
  }
  updateprofilphoto(data:any){
    return this.httpclient.patch(this.url+'/user/updateprofilephoto',data)
  }
  updateusertype(data:any){
    return this.httpclient.patch(this.url+'/user/updateusertype',data)
  }
  contactus(data:any){
  return this.httpclient.post(this.url+'/user/contact',data)
  }
  notifget(){
    return this.httpclient.get(this.url+'/dashbordrecreteur/notifget')
  }
  notifcount(){
    return this.httpclient.get(this.url+'/dashbordrecreteur/notifcount')
  }
  photo(){
    return this.httpclient.get(this.url+'/user/photo')
  }
  updateemail(data:any){
    return this.httpclient.patch(this.url+'/user/updateemail',data)
  }

  updatecompany(data:any){
    return this.httpclient.patch(this.url+'/user/updatecompany',data)
  }
  postuleurcount(id:any){
    return this.httpclient.get(this.url+'/postuleurcounts/'+id)
  }
}
