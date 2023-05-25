import { DashbordclientService } from './../Services/dashbordclient.service';
import { ProfilService } from './../Services/profil.service';
import { Globalconstants } from './../shared/accordion/global-constants';
import { FormBuilder,  FormGroup, Validators } from '@angular/forms';
import { SnackbarService } from './../Services/snackbar.service';
import { UserService } from './../Services/user.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { ActivatedRoute, Router } from '@angular/router';

import { JobService } from './../Services/job.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-profilstaticjob',
  templateUrl: './profilstaticjob.component.html',
  styleUrls: ['./profilstaticjob.component.css'],

})
export class ProfilstaticjobComponent implements OnInit {
  responsemessage=''
  job: any=[]
  data:any
  dta:any
  dva:any
commentaire:any=[]
  constructor(private jobservice:JobService,private snackbar :SnackbarService,private formbuilder:FormBuilder,private userservice:UserService,private ngxservice:NgxUiLoaderService,private router :Router,private route:ActivatedRoute,private profileserivce:ProfilService,private dashbordclient:DashbordclientService) { }
  id:any

  comment:any=[]
  commentform:any=FormGroup
  userprofil:any
  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
this.retreivejobid()
this.postuleurcounts()
this.commeget()
this.hide()

this.commentform=this.formbuilder.group({commentaire:[null,Validators.maxLength(10)]}

)
  }
  retreivejobid(){
    this.jobservice.getjobbyid(this.id).subscribe((data=>{

    return this.job=data




    }))

  }
  commeget(){
    this.userservice.getcommentaire(this.id).subscribe((data=>{
      return this.comment=data
    }))
  }
  commsubmit(){
     this.ngxservice.start()
     var forms=this.commentform.value
     var data={
       commentaire:forms.commentaire
     }
     this.userservice.postcommentaire(this.id,data).subscribe((response:any)=>{


           this.responsemessage=response?.message
           this.commentform.reset()

       this.ngxservice.stop()
       this.commeget()

       this.snackbar.openSnackBar(this.responsemessage,"")
     },(error:any)=>{
      this.ngxservice.stop()

      if (error.errors?.message) {
        this.responsemessage = error.error?.message
      }
      else {
        this.commentform.reset()
        this.responsemessage = Globalconstants.postedalready
      }
      this.snackbar.openSnackBar(this.responsemessage, Globalconstants.error)
    }
    )
  }
  hide(){
    this.profileserivce.hidenav().subscribe((response:any)=>{

      this.data=response
    }

    )
  }

  postulateconcour(){
     this.ngxservice.start()


     this.dashbordclient.postulatetoconcour(this.id,this.data).subscribe((response:any)=>{


           this.responsemessage=response?.message

       this.ngxservice.stop()


       this.snackbar.openSnackBar(this.responsemessage,"")
       window.location.reload()
     },(error:any)=>{
      this.ngxservice.stop()

      if (error.errors?.message) {
        this.responsemessage = error.error?.message
      }
      else {
        this.responsemessage = Globalconstants.postulatedalready
      }
      this.snackbar.openSnackBar(this.responsemessage, Globalconstants.error)
    }
    )
  }
postuleurcounts(){
  this.dashbordclient.postuleurcounts(this.id).subscribe((response=>{
    this.dta=response
    console.log(this.dta)
  }))
}





    }




