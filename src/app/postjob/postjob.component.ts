import { SnackbarService } from './../Services/snackbar.service';
import { MatDialogRef } from '@angular/material/dialog';
import { JobService } from './../Services/job.service';
import { Globalconstants } from '../shared/accordion/global-constants';
import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postjob',
  templateUrl: './postjob.component.html',
  styleUrls: ['./postjob.component.css']
})
export class PostjobComponent implements OnInit {
  content='dynamic data'
  data:any
 postjobform:any=FormGroup
 responsemessage:any
 logourl:any
  constructor(private snackbar :SnackbarService,private dialogRef:MatDialogRef<PostjobComponent>,private jobservice:JobService ,private FormBuilder:FormBuilder,private ngxservice:NgxUiLoaderService,private router:Router) {
  }

  ngOnInit(): void {
    this.postjobform=this.FormBuilder.group({

  jobtitle: [null,Validators.required],


    jobtype: [null,Validators.required],
    jobcategorie:[null,Validators.required],
    Descriptionj:[null,Validators.required],
    salary: [null,Validators.required],
    closingdate:[null,Validators.required],
    jobrequirement:[null,Validators.required],
    hours:[null,Validators.required],
    nombrepostes:[null,Validators.required]

}


    )
  }

  handlepost(){
    const pd= new FormData()
    var formdata=this.postjobform.value

    this.ngxservice.start()

 pd.append('jobtype',formdata.jobtype)
 pd.append('jobcategorie',formdata.jobcategorie)
 pd.append('Descriptionj',formdata.Descriptionj)
 pd.append('salary',formdata.salary)
 pd.append('closingdate',formdata.closingdate)
 pd.append('jobrequirement',formdata.jobrequirement)
 pd.append('hours',formdata.hours),
 pd.append('jobtitle',formdata.jobtitle),
 pd.append('nombrepostes',formdata.nombrepostes)

      this.jobservice.postingjob(pd).subscribe((response:any)=>{
         this.ngxservice.stop()
      this.dialogRef.close()
      this.responsemessage = response?.message
      this.snackbar.openSnackBar(this.responsemessage, '')

      this.router.navigate(['home'])

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


