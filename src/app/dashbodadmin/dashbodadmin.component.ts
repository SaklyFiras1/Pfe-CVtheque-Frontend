import { candidat } from './../Models/userann';
import { prepostjob } from './../Models/prepostmodet';
import { DashbordService } from './../Services/dashbord.service';
import { Globalconstants } from './../shared/global-constants';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { RefuserComponent } from './../refuser/refuser.component';
import { AccepteComponent } from './../accepte/accepte.component';
import { DeleteComponent } from './../delete/delete.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../Services/snackbar.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { LogoutComponent } from '../logout/logout.component';

@Component({
  selector: 'app-dashbodadmin',
  templateUrl: './dashbodadmin.component.html',
  styleUrls: ['./dashbodadmin.component.css']
})
export class DashbodadminComponent implements OnInit {
token:any
prepostjob:any=[]
candidat:any=[]
jobpre:any
jobp:any
jok:any
data:any
id:any
profil:any
wcandidat:any=[]

  responsemessage:any=''
  constructor(private dialog:MatDialog,private snackbar:SnackbarService,private router:Router,private ngxservice:NgxUiLoaderService,private dashbordservice:DashbordService,private route:ActivatedRoute)  {this.id=this.route.snapshot.params['id']  ;
   }

  ngOnInit(): void {
    this.getcandidats()
    this.id=this.route.snapshot.params['id']

    this.getrequests()

  this.getusers()
  }


changepasswordaction(){
  const dialogconfig=new MatDialogConfig
  dialogconfig.width="520px"
this.dialog.open(ChangepasswordComponent,dialogconfig)
}
logoutaction(){
  const dialogconfig=new MatDialogConfig
  dialogconfig.width="520px"
this.dialog.open(LogoutComponent,dialogconfig)
}




  deleteaction(){
    var dialogconfig=new MatDialogConfig
    dialogconfig.width="523px"
    this.dialog.open(DeleteComponent,dialogconfig)

  }

  refuseraction(){
    var dialogconfig=new MatDialogConfig
    dialogconfig.width="700px"
    this.dialog.open(RefuserComponent,dialogconfig)

  }
  getrequests(){
this.dashbordservice.getjobrequests().subscribe((data=>{

 return this.prepostjob=data

}


))

  }
  deletejobpre(id:any) {

    if(window.confirm(`Do You Want To Delete Job ${id}  Request Admin `)) {
      this.dashbordservice.deletejob(id).subscribe((response) => {
        this.ngxservice.start()
      this.responsemessage=response?.message
      this.getrequests()
      this.ngxservice.stop()
      return this.snackbar.openSnackBar(this.responsemessage,'')

      }, (error: any) => {
        this.ngxservice.stop()

        if (error.errors?.message) {
          this.responsemessage = error.error?.message
        }
        else {
          this.responsemessage = Globalconstants.genericerror
        }
        this.snackbar.openSnackBar(this.responsemessage, Globalconstants.error)
      }
      )
    }
  }
postjobreq(id:any,data:any){
  if(window.confirm(`Do You Want To accept Job ${id}  Request Admin `)) {
    this.dashbordservice.postjobreq(data,id).subscribe((response) => {

      this.ngxservice.start() ;
      this.responsemessage=response?.message
    this.getrequests()
    this.ngxservice.stop()
    return this.snackbar.openSnackBar(this.responsemessage,'')

    }, (error: any) => {
      this.ngxservice.stop()

      if (error.errors?.message) {
        this.responsemessage = error.error?.message
      }
      else {
        this.responsemessage = Globalconstants.genericerror
      }
      this.snackbar.openSnackBar(this.responsemessage, Globalconstants.error)
    }
    )
  }
}
refus(id:any,data:any){
  if(window.confirm(`Do You Want To Decline Job ${id}  Request Admin `)) {
    this.dashbordservice.refusjob(id,this.data).subscribe((response) => {

      this.ngxservice.start() ;
      this.responsemessage=response?.message
    this.getrequests()
    this.ngxservice.stop()
    return this.snackbar.openSnackBar(this.responsemessage,'')

    }, (error: any) => {
      this.ngxservice.stop()

      if (error.errors?.message) {
        this.responsemessage = error.error?.message
      }
      else {
        this.responsemessage = Globalconstants.genericerror
      }
      this.snackbar.openSnackBar(this.responsemessage, Globalconstants.error)
    }
    )
  }
}
getcandidats(){
  this.dashbordservice.getcandidatsrequests().subscribe((data=>{
 
   return this.candidat=data



  }))
}
deletecandidatannonce(id:any) {

  if(window.confirm(`Do You Want To Delete Candidat  ${id} Annonce Admin `)) {
    this.dashbordservice.deletecandidatannonce(id).subscribe((response) => {
      this.ngxservice.start()
    this.responsemessage=response?.message
    this.getcandidats()
    this.ngxservice.stop()
    return this.snackbar.openSnackBar(this.responsemessage,'')

    }, (error: any) => {
      this.ngxservice.stop()

      if (error.errors?.message) {
        this.responsemessage = error.error?.message
      }
      else {
        this.responsemessage = Globalconstants.genericerror
      }
      this.snackbar.openSnackBar(this.responsemessage, Globalconstants.error)
    }
    )
  }
}
getusers(){
  this.dashbordservice.getusers().subscribe((data:any)=>{
 this.wcandidat=data
 console.log(data)

  })
}
approvecandidat(id:any) {

  if(window.confirm(`Do You Want To Approve Candidat  ${id}  Admin `)) {
    this.dashbordservice.updatebadgeapproved(id,this.data).subscribe((response:any) => {
      this.ngxservice.start()
    this.responsemessage=response?.message
    this.getusers()
    this.ngxservice.stop()
    return this.snackbar.openSnackBar(this.responsemessage,'')

    }, (error: any) => {
      this.ngxservice.stop()

      if (error.errors?.message) {
        this.responsemessage = error.error?.message
      }
      else {
        this.responsemessage = Globalconstants.genericerror
      }
      this.snackbar.openSnackBar(this.responsemessage, Globalconstants.error)
    }
    )
  }
}
Expertcandidat(id:any) {

  if(window.confirm(`Do You Want To Upgrade Badge Candidat  ${id}  To Expert Admin `)) {
    this.dashbordservice.updatebadgeexpert(id,this.data).subscribe((response:any) => {
      this.ngxservice.start()
    this.responsemessage=response?.message
    this.getusers()
    this.ngxservice.stop()
    return this.snackbar.openSnackBar(this.responsemessage,'')

    }, (error: any) => {
      this.ngxservice.stop()

      if (error.errors?.message) {
        this.responsemessage = error.error?.message
      }
      else {
        this.responsemessage = Globalconstants.genericerror
      }
      this.snackbar.openSnackBar(this.responsemessage, Globalconstants.error)
    }
    )
  }
}


}
