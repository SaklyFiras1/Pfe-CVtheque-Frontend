import { Globalconstants } from './../shared/global-constants';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { UserService } from './../Services/user.service';
import { SnackbarService } from './../Services/snackbar.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-changeemail',
  templateUrl: './changeemail.component.html',
  styleUrls: ['./changeemail.component.css']
})
export class ChangeemailComponent implements OnInit {
  responsemessage=''
emailform:any=FormGroup
    constructor(private formbuilder:FormBuilder, private snackbar:SnackbarService,private userservice:UserService ,private router:Router,private ngxservice:NgxUiLoaderService,private DialogRef:MatDialogRef<ChangeemailComponent>) { }

    ngOnInit(): void {
      this.emailform=this.formbuilder.group(({oldemail:[null,[Validators.required]],
        newemail:[null,[Validators.required]]
      }))

    }
   changeemail (){
     this.ngxservice.start()
     var formdata =this.emailform.value
     var data={
       oldemail:formdata.oldemail,
       newemail:formdata.newemail
     }
     this.userservice.updateemail(data).subscribe(
      (response: any) => {
        this.ngxservice.stop();
        this.DialogRef.close();
        this.responsemessage = response?.message
        this.snackbar.openSnackBar(this.responsemessage, "")
       localStorage.clear()
        this.router.navigate([''])
      }, (error: any) => {
        this.ngxservice.stop()

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
