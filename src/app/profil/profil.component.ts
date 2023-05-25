import { UpdatecompanyComponent } from './../updatecompany/updatecompany.component';
import { ProfilService } from './../Services/profil.service';
import { AddprofilComponent } from './../addprofil/addprofil.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { userprofil } from './../Models/profilModel';
import { UserService } from './../Services/user.service';

import { Component, OnInit } from '@angular/core';
import { MonProfilComponent } from '../mon-profil/mon-profil.component';
import { UsertypeComponent } from '../usertype/usertype.component';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
data:any
ka:any
  userprofil:any=[]
  constructor(private userservice:UserService,private Dialog:MatDialog,private profilservice:ProfilService) { }

  ngOnInit(): void {
    this.monprofil()
  }
  monprofil(){
    this.userservice.getcurrentuser().subscribe((result:any)=>{
      
      this.userprofil=result
     console.log(this.userprofil)

    })




  }
  updateaction(){
   const dialogconfig=new MatDialogConfig
  dialogconfig.width="523px";
  this.Dialog.open(AddprofilComponent,dialogconfig)
  }
  updatecaction(){
    const dialogconfig=new MatDialogConfig
   dialogconfig.width="523px";
   this.Dialog.open(UpdatecompanyComponent,dialogconfig)
   }
  updatephotoaction(){
    const dialogconfig=new MatDialogConfig
   dialogconfig.width="523px";
   this.Dialog.open(MonProfilComponent,dialogconfig)
   }
   hide(){
    this.profilservice.hidenav().subscribe((response:any)=>{

      this.ka=response
      console.log(this.ka)
    }

    )
  }
  usertypeaction(){
    const dialogconfig=new MatDialogConfig
    dialogconfig.width="523px"
    this.Dialog.open(UsertypeComponent,dialogconfig)
   }


}
