import { Observable, observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { userprofil } from '../Models/profilModel';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {
  url=environment.apiurl

  constructor( private httpclient:HttpClient) { }

  getprofilspostuleur(id: string){
    return this.httpclient.get<userprofil[]>(this.url+'/profil/gprofil/'+id)
  }
  getprofil(){
    return this.httpclient.get<userprofil[]>(this.url+'/profil/get')
  }
  hidenav(){
    return this.httpclient.get<userprofil[]>(this.url+'/dashbordrecreteur/checkcomcan')
  }
  getannoncebyid(id:any):Observable<any>{
    return this.httpclient.get<userprofil>(this.url+'/dashbordadmin/getannoncecandidats/ '+id)



  }
  postannonce(formdata:any){


    return this.httpclient.post<File>(this.url+'/dashborduser/postannonce',formdata)


  }

}
