import { Router } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from './../Services/user.service';
import { SnackbarService } from './../Services/snackbar.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Globalconstants } from '../shared/accordion/global-constants';

@Component({
  selector: 'app-mon-profil',
  templateUrl: './mon-profil.component.html',
  styleUrls: ['./mon-profil.component.css']
})
export class MonProfilComponent implements OnInit {

  data:any
updatephotoform:any=FormGroup
responsemessage=''
photourl:any
filenamephoto='NONE'
 constructor(private snackbar :SnackbarService,private dialogRef:MatDialogRef<MonProfilComponent>,private UserService:UserService ,private ngxservice:NgxUiLoaderService,private router:Router) {
 }
 userprofil:any


 ngOnInit(): void {
   this.updatephotoform=new FormGroup({
    photourl:new FormControl('')

}




   )
   this.monprofil()

this.monprofil()
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
onFileSelect(event:any) {
  this.photourl=event.target.files[0]
  this.filenamephoto=event.target.files[0].name

          if(!this.validateFile(this.photourl.name)) {


               this.updatephotoform.reset()
               this.filenamephoto='Only jpg format accepted '
   return false
          }
          else{

            return true
          }

    }

 handlepost(){
   this.ngxservice.start()
   const fd =new FormData()
 fd.append('photourl',this.photourl,this.photourl.name)
     this.UserService.updateprofilphoto(fd).subscribe((response:any)=>{
        this.ngxservice.stop()
     this.dialogRef.close()
     this.responsemessage = response?.message
     this.router.navigate(['profil'])
     this.snackbar.openSnackBar(this.responsemessage, '')

     this.router.navigate(['profil'])
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
 monprofil(){
  this.UserService.getcurrentuser().subscribe((result:any)=>{
    console.log(result)
   return this.userprofil=result})
  }

}
