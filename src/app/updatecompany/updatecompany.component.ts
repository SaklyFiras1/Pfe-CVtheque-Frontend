import { __values } from 'tslib';
import { ProfilComponent } from './../profil/profil.component';
import { userprofil } from './../Models/profilModel';

import { Router } from '@angular/router';
import { UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { NgxUiLoaderService } from 'ngx-ui-loader';
import { PostjobComponent } from '../postjob/postjob.component';

import { SnackbarService } from '../Services/snackbar.service';
import { Globalconstants } from '../shared/global-constants';
import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
@Component({
  selector: 'app-updatecompany',
  templateUrl: './updatecompany.component.html',
  styleUrls: ['./updatecompany.component.css']
})
export class UpdatecompanyComponent implements OnInit {
updateform:any=FormGroup
responsemessage=''
userprofil:any
  constructor(private snackbar :SnackbarService,private dialogRef:MatDialogRef<UpdatecompanyComponent>,private userService:UserService ,private FormBuilder:FormBuilder,private ngxservice:NgxUiLoaderService,private router:Router,private userservice:UserService) {}
  ngOnInit(): void {
    this.updateform=this.FormBuilder.group({
      location :[null,[Validators.required]],
      username:[null,[Validators.required]],
      companyurl:[null,[Validators.required]],
     numerodetelephone:[null,[Validators.required]],

  })
this.current()
}

  handlepost(){
    this.ngxservice.start()

 const fd =new FormData()
  var form=this.updateform.value
  fd.append('location',form.location)
   fd.append('numerodetelephone',form.numerodetelephone)
   fd.append('companyurl',form.companyurl)
   fd.append('username',form.username)
      this.userService.updatecompany(fd).subscribe((response:any)=>{
         this.ngxservice.stop()
      this.dialogRef.close()
      this.responsemessage = response?.message
      this.snackbar.openSnackBar("updated successfully", '')

      window.location.reload()

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
  current(){
    this.userservice.getcurrentuser().subscribe((response)=>{
      this.userprofil=response

      console.log(this.userprofil)

    })
  }
}
