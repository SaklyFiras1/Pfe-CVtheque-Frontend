import { Globalconstants } from './../shared/accordion/global-constants';
import { AuthService } from './auth.service';
import { SnackbarService } from './snackbar.service';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService {


z=1
  constructor(private router:Router,private snackbar:SnackbarService,private auth:AuthService) { }
   checkRole:any;
canActivate(route:ActivatedRouteSnapshot):boolean{
  let expectedRoleArray=route.data
   expectedRoleArray=expectedRoleArray['expectedRole']

  const token :any=localStorage.getItem('token')

  var tokenPayload:any
  try{

  tokenPayload=jwt_decode(token)

  }
  catch(err){
    localStorage.clear()
    this.router.navigate([''])
  }
  let checkRole=false
  for(let i=0;i<expectedRoleArray['length'];i++)
  {
  if(expectedRoleArray[i]==tokenPayload.ROLE){
    checkRole=true
}
}
if(tokenPayload.ROLE=='admin'){
  if(this.auth.isauthantificated() && checkRole){

    return true
  }
  this.snackbar.openSnackBar(Globalconstants.admin,Globalconstants.error)

  this.router.navigate(['dashbordadmin'])


  return false

  }

if(tokenPayload.ROLE=='user'){
if(this.auth.isauthantificated() && checkRole){
  return true
}
this.snackbar.openSnackBar(Globalconstants.unauthorized,Globalconstants.error)
this.router.navigate(['home'])

return false
}

else{
  this.router.navigate([''])
  localStorage.clear()

  return false
}
}}
