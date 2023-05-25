
import { SnackbarService } from './../Services/snackbar.service';
import { ProfilService } from './../Services/profil.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Globalconstants } from '../shared/accordion/global-constants';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-postannoncecabndidat',
  templateUrl: './postannoncecabndidat.component.html',
  styleUrls: ['./postannoncecabndidat.component.css']
})
export class PostannoncecabndidatComponent implements OnInit {
  photourl: any
  pdfcv:any
  verifphoto=''
  filename='None'
filenamephoto='None'
  constructor( private dialogRef:MatDialogRef<PostannoncecabndidatComponent>,private profilservice: ProfilService,private router:Router,private snackbar:SnackbarService,private formbuilder:FormBuilder,private ngxService:NgxUiLoaderService ) { }





  postcanform: any = FormGroup;
  responsemessage: any;




  ngOnInit(): void {

    this.postcanform = this.formbuilder.group({

      recherchedpost:[null,Validators.required],
      description:[null,Validators.required],
      expiredate:[null,Validators.required],
      salary:[null,Validators.required],

      hours:[null,Validators.required],




    })

  }
  validateFile(name: String) {
    var ext = name.split('.')[1];
    console.log(ext)
    if (ext== 'jpg') {
        return true;

    }
    else {

        return false;
    }
}

  handlesubmit() {

 const fd =new FormData()
 var form=this.postcanform.value




  fd.append('recherchedpost',form.recherchedpost)
  fd.append('expiredate',form.expiredate)
  fd.append('hours',form.hours)
  fd.append('salary',form.salary)
  fd.append('description',form.description)
    this.ngxService.start()

    this.profilservice.postannonce(fd).subscribe(

      (response: any) => {

        console.log(response)
        console.log(fd)
        this.ngxService.stop();
        this.dialogRef.close();
        this.responsemessage = response?.message
        this.snackbar.openSnackBar(this.responsemessage, "")
        window.location.reload()
      }, (error: any) => {
        this.ngxService.stop()
        this.dialogRef.close()
        if (error) {
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
