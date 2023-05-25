import { LoginComponent } from './../login/login.component';
import { Globalconstants } from './../shared/accordion/global-constants';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { SnackbarService } from '../Services/snackbar.service';
import { UserService } from '../Services/user.service';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupform: any = FormGroup;
  responsemessage: any;
  constructor(private formbuilder: FormBuilder,

    private userService: UserService, private snackBarservice: SnackbarService,
    private ngxService: NgxUiLoaderService, private dialogRef: MatDialogRef<SignupComponent>, private router: Router) { }

  ngOnInit(): void {
    this.signupform = this.formbuilder.group({
      username: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.pattern(Globalconstants.emailRegex)]],
      password: [null, [Validators.required]],
      usertype:[null,[Validators.required]]
    })

  }
  handlesubmit() {
    this.ngxService.start()
    var formdata = this.signupform.value
    var data = {
      username: formdata.username,
      email: formdata.email,
      password: formdata.password,
      usertype:formdata.usertype

    }
    this.userService.signup(data).subscribe((response: any ,
    ) => {
      this.ngxService.stop()
      this.dialogRef.close();
      this.responsemessage = response?.message
      this.snackBarservice.openSnackBar(this.responsemessage, "")
      this.router.navigate([LoginComponent])
    }, (error) => {
      this.ngxService.stop();
      if (error.error?.message) {
        this.responsemessage = error.error?.message
      }
      else {
        this.responsemessage = Globalconstants.genericerror
      }
      this.snackBarservice.openSnackBar(this.responsemessage, Globalconstants.error)
    }
    )
  }
}
