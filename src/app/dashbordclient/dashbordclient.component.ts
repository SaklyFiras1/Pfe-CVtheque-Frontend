import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProfilService } from './../Services/profil.service';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from './../Services/snackbar.service';
import { prepostjob } from './../Models/prepostmodet';
import { Component, OnInit } from '@angular/core';
import { DashbordclientService } from '../Services/dashbordclient.service';
import { Globalconstants } from '../shared/accordion/global-constants';
import { PostjobComponent } from '../postjob/postjob.component';

@Component({
  selector: 'app-dashbordclient',
  templateUrl: './dashbordclient.component.html',
  styleUrls: ['./dashbordclient.component.css']
})
export class DashbordclientComponent implements OnInit {
data:any
hp:any
prepostjob:any=[]
hobs:any
id:any
responsemessage=''
  constructor(private dashbordclient:DashbordclientService,private snackbar:SnackbarService,private ngxservice:NgxUiLoaderService,private route:ActivatedRoute,private profilservice:ProfilService,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.hide()
    this.getpostulatejobdemande()
    this.getrecjobs()

   this.getpostulatorsnumber(this.id)

  }
  getrecjobs(){
    this.dashbordclient.getrecjobs().subscribe((response:any)=>{
      this.prepostjob=response

    })
  }
  deletejobpre(id:any) {
    console.log(id);
    if(window.confirm(`Do You Want To Delete Job #${id} Annonce`)) {
      this.dashbordclient.deleteannonce(id).subscribe((response:any) => {
        this.ngxservice.start()
      this.responsemessage=response?.message
      this.getrecjobs()
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
  hide(){
    this.profilservice.hidenav().subscribe((response:any)=>{

      this.data=response
    }

    )
  }


  getpostulatejobdemande(){
    this.dashbordclient.getpostulatedjobs().subscribe((response:any)=>{

      return this.hobs=response

    })
  }
  postjobaction(){
    const dialogconfig=new MatDialogConfig()
    dialogconfig.width="560px"
    this.dialog.open(PostjobComponent,dialogconfig)
  }
  getpostulatorsnumber(id:any){
    this.dashbordclient.postuleurcounts(id).subscribe((response:any)=>{

      return this.hp=response

    })
  }
}
