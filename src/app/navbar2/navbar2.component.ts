import { UsertypeComponent } from './../usertype/usertype.component';
import { UpdatecompanyComponent } from './../updatecompany/updatecompany.component';
import { ChangeemailComponent } from './../changeemail/changeemail.component';
import { ProfilService } from './../Services/profil.service';
import { ChangepasswordComponent } from './../changepassword/changepassword.component';

import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar2',
  templateUrl: './navbar2.component.html',
  styleUrls: ['./navbar2.component.css']
})
export class Navbar2Component implements OnInit {
data:any
  constructor(private dialog:MatDialog,private profilservice:ProfilService) { }

  ngOnInit(): void {
    this.hide()
  }

changepasswordaction(){
  const dialogconfig=new MatDialogConfig
  dialogconfig.width="520px"
this.dialog.open(ChangepasswordComponent,dialogconfig)

}
hide(){
  this.profilservice.hidenav().subscribe((response:any)=>{

    this.data=response
  }

  )
}
changeemailaction(){
  const dialogconfig=new MatDialogConfig
  dialogconfig.width="520px"
this.dialog.open(ChangeemailComponent,dialogconfig)

}
updatecaction(){
  const dialogconfig=new MatDialogConfig
 dialogconfig.width="523px";
 this.dialog.open(UsertypeComponent,dialogconfig)
 }



}
