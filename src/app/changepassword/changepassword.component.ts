import { Globalconstants } from './../shared/global-constants';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderConfig, NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { UserService } from './../Services/user.service';
import { SnackbarService } from './../Services/snackbar.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit {

responsemessage=''
passwordform:any=FormGroup
  constructor(private formbuilder:FormBuilder, private snackbar:SnackbarService,private userservice:UserService ,private router:Router,private ngxservice:NgxUiLoaderService,private dialogRef:MatDialogRef<ChangepasswordComponent>) { }

  ngOnInit(): void {
    this.passwordform=this.formbuilder.group(({oldpassword:[null,[Validators.required]],
      newpassword:[null,[Validators.required]]
    }))

  }
 changepassword (){
   this.ngxservice.start()
   var formdata =this.passwordform.value
   var data={
     oldpassword:formdata.oldpassword,
     newpassword:formdata.newpassword
   }
   this.userservice.changepassword(data).subscribe(
    (response: any) => {
      this.ngxservice.stop();
      this.dialogRef.close();
      this.responsemessage = response?.message
      this.snackbar.openSnackBar(this.responsemessage, "")
      this.router.navigate(['/profil'])
    }, (error: any) => {
      this.ngxservice.stop()
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
