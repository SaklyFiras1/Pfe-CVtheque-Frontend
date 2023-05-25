import { Globalconstants } from './../shared/global-constants';
import { Router } from '@angular/router';
import { ProfilComponent } from './../profil/profil.component';
import { SnackbarService } from './../Services/snackbar.service';
import { FormBuilder, Validators } from '@angular/forms';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { UserService } from './../Services/user.service';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usertype',
  templateUrl: './usertype.component.html',
  styleUrls: ['./usertype.component.css']
})
export class UsertypeComponent implements OnInit {
usertypeform:any
responsemessage=''
  constructor(private dialog:MatDialog,private userservice:UserService,private ngxService:NgxUiLoaderService,private formbuilder:FormBuilder,private dialogRef: MatDialogRef<UsertypeComponent>,private snackbar :SnackbarService,private router:Router ) {



   }

  ngOnInit(): void {
    this.usertypeform = this.formbuilder.group({

      usertype:[null,[Validators.required]]
    })
  }
 usertypeaction(){
  const dialog=new MatDialogConfig
  dialog.width="523px"
  this.dialog.open(UsertypeComponent,dialog)
 }
 handlesubmit() {
  this.ngxService.start()
  var formdata = this.usertypeform.value
  var data = {
    usertype: formdata.usertype

  }
  this.userservice.updateusertype(data).subscribe((response: any ,
  ) => {
    this.ngxService.stop()
    this.dialogRef.close();
    this.responsemessage = response?.message
    this.snackbar.openSnackBar("updated successfully", "")
    this.router.navigate(['profil'])
    window.location.reload()
  }, (error) => {
    this.ngxService.stop();
    if (error.error?.message) {
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
