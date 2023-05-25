import { LogoutComponent } from './../logout/logout.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../Services/user.service';
import { response } from 'express';
import { ProfilService } from '../Services/profil.service';

@Component({
  selector: 'app-navbar1',
  templateUrl: './navbar1.component.html',
  styleUrls: ['./navbar1.component.css']
})
export class Navbar1Component implements OnInit {
data:any
count:any
ka:any
dat:any
  constructor(private dialog:MatDialog ,private userservice:UserService,private profilservice:ProfilService) { }

  ngOnInit(): void {
    this.notifget()
    this.notifcount()
    this.hide()
    this.userprofila()
  }
  logoutaction(){
    const dialogconfig=new MatDialogConfig
    dialogconfig.width="530px"
  this.dialog.open(LogoutComponent,dialogconfig)
  }
  notifget(){
    this.userservice.notifget().subscribe((response:any)=>{
      this.data=response


    })

}
userprofila(){
  this.userservice.photo().subscribe((response=>{
    this.dat=response
    console.log(this.dat)
  }))
}
hide(){
  this.profilservice.hidenav().subscribe((response:any)=>{

    this.ka=response
   
  }

  )
}

notifcount(){
  this.userservice.notifcount().subscribe((response:any)=>{
    this.count=response
console.log(this.count)

  })

}

}
