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
  selector: 'app-addprofil',
  templateUrl: './addprofil.component.html',
  styleUrls: ['./addprofil.component.css']
})
export class AddprofilComponent implements OnInit {
data:any
updateform:any=FormGroup
responsemessage=''
filename='None'

  pdfcv: any;
 constructor(private snackbar :SnackbarService,private dialogRef:MatDialogRef<AddprofilComponent>,private userService:UserService ,private FormBuilder:FormBuilder,private ngxservice:NgxUiLoaderService,private router:Router,private userservice:UserService) {
 }
 userprofil:any


 ngOnInit(): void {
   this.updateform=this.FormBuilder.group({
    location :[null,[Validators.required]],
   titreprofessionelle: [null,[Validators.required]],
certificats:[null,[Validators.required]],
   aproposdemoi:[null,[Validators.required]],
   university:[null,[Validators.required]],
   niveauetude:[null,[Validators.required]],
   diplomes:[null,[Validators.required]],
   detailleexperience:[null,[Validators.required]],
   numerodetelephone:[null,[Validators.required]],
   skills:[null,[Validators.required]],
   langues:[null,[Validators.required]],
   linkedin:[null,[Validators.required]],
   pdfcv:[null,[Validators.required]],
   datedenaissance:[null,[Validators.required]],
   username:[null,[Validators.required]]
}




   )
   this.current()
 }
 onFileSelec(event:any) {
  this.pdfcv=event.target.files[0]
  this.filename=event.target.files[0].name
  if(!this.validatepdf(this.pdfcv.name)){
      console.log(this.pdfcv.name)
      this.updateform.reset()
      this.filename='None Only Pdf Is Accepted'
      return false

  }

else{
  return true
}


    }
 validatepdf(name: String) {
  var ext = name.split('.')[1];
  console.log(ext)
  if (ext== 'pdf') {
    console.log(ext)
      return true;

  }
  else {

      return false;
  }
}
 handlepost(){
   this.ngxservice.start()

const fd =new FormData()
 var form=this.updateform.value
 fd.append('username',form.username)
 fd.append('location',form.location)
  fd.append('titreprofessionelle',form.titreprofessionelle)
  fd.append('certificats',form.certificats)
  fd.append('pdfcv',this.pdfcv,this.pdfcv.name)
  fd.append('aproposdemoi',form.aproposdemoi)
  fd.append('university',form.university)
  fd.append('niveauetude',form.niveauetude)
  fd.append('diplomes',form.diplomes)
  fd.append('detailleexperience',form.detailleexperience)
  fd.append('numerodetelephone',form.numerodetelephone)
  fd.append('datedenaissance',form.datedenaissance)
  fd.append('skills',form.skills)
  fd.append('langues',form.langues)
  fd.append('linkedin',form.linkedin)
     this.userService.updateprofil(fd).subscribe((response:any)=>{
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


