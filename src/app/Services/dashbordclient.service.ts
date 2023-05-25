import { prepostjob } from './../Models/prepostmodet';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashbordclientService {

  constructor(private httpClient:HttpClient) { }
url=environment.apiurl

getrecjobs(){
  return this.httpClient.get(this.url+'/dashbordrecreteur/getjobsbyid')
}
deleteannonce(id:any){
  return this.httpClient.delete(this.url+'/dashbordrecreteur/deleteannonce/'+id)
}
getcandidats(id:any){
  return this.httpClient.get(this.url+'/dashbordrecreteur/recreteur/'+id)
}
view(id:any){
  return this.httpClient.get(this.url+'/dashbordrecreteur/viewprofil/'+id)
}
acceptcandidat(id:any,jb:any,data:any){
  return this.httpClient.patch(this.url+'/dashbordrecreteur/preselectcandidat/'+id+'/'+jb,data)
}
refusecandidat(id:any,jb:any,data:any){
  return this.httpClient.patch(this.url+'/dashbordrecreteur/refusecandidat/'+id+'/'+jb,data)
}
postulatetoconcour(id:any,data:any){
  return this.httpClient.post(this.url+'/dashborduser/postulatetojob/'+id,data)
}

getpostulatedjobs(){
  return this.httpClient.get<prepostjob[]>(this.url+'/dashborduser/getpostulatedemandes')

}
getannonceusersearchjob(data:any){
  return this.httpClient.get(this.url+'/dashborduser/postsearchjobdemande',data)
}
postannoncesearchjobuser(data:any){
  return this.httpClient.post(this.url+'/dashborduser/postsearchjobdemande',data)
}
deleteannoncedemande(id:any,data:any){
  return this.httpClient.delete(this.url+'/dashborduser/postsearchjobdemande',data)
}
postuleurcounts(id:any){
  return this.httpClient.get(this.url+'/dashbordrecreteur/postuleurcounts/'+id)
}




}
