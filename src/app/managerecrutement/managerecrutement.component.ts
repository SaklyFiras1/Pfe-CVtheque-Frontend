
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from './../Services/snackbar.service';
import { prepostjob } from './../Models/prepostmodet';
import { Component, OnInit } from '@angular/core';
import { DashbordclientService } from '../Services/dashbordclient.service';
import { Globalconstants } from '../shared/accordion/global-constants';


@Component({
  selector: 'app-managerecrutement',
  templateUrl: './managerecrutement.component.html',
  styleUrls: ['./managerecrutement.component.css']
})

export class ManagerecrutementComponent implements OnInit {
  data:any
prepostjob:any=[]
jobpre:any
id:any
responsemessage=''
  constructor(private dashbordclient:DashbordclientService,private snackbar:SnackbarService,private ngxservice:NgxUiLoaderService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.getcandidats()
  }
  getcandidats(){
    this.dashbordclient.getcandidats(this.id).subscribe((data=>{

     return this.prepostjob=data

    }))


  }
  viewprofil(){
    this.dashbordclient.view(this.id).subscribe((data=>{

      return this.prepostjob=data
  }))
  }
  refus(id:any,jb:any,data:any){
    if(window.confirm(`Do You Want To Refuse ${jb} user `)) {
      this.dashbordclient.refusecandidat(this.id,jb,data).subscribe((response:any) => {

        this.ngxservice.start() ;
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

  accept(id:any,jb:any,data:any){
    if(window.confirm(`Do You Want To Accept ${jb} user `)) {
      this.dashbordclient.acceptcandidat(this.id,jb,data).subscribe((response:any) => {

        this.ngxservice.start() ;
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


}
