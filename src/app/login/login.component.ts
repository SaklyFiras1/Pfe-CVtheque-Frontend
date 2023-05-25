
import { MatDialogRef } from '@angular/material/dialog';
import { Globalconstants } from './../shared/accordion/global-constants';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router } from '@angular/router';
import { UserService } from './../Services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../Services/snackbar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  signinforms: any = FormGroup;
  responsemessage: any
  constructor(private formbuilder: FormBuilder, private userService: UserService, private router: Router, private ngxservice: NgxUiLoaderService, private snackbar: SnackbarService, private dialogRef: MatDialogRef<LoginComponent>) { }

  ngOnInit(): void {
    this.signinforms = this.formbuilder.group({
      email: [null, [Validators.required, Validators.pattern(Globalconstants.emailRegex)]],
      password: [null, [Validators.required]]
    })
  }

  handlesubmit() {
    this.ngxservice.start();
    var formdata = this.signinforms.value;
    var data = {
      email: formdata.email,
      password: formdata.password
    }
    this.userService.signin(data).subscribe((response: any) => {
      this.ngxservice.stop()
      this.dialogRef.close()
      this.responsemessage = response?.message
      localStorage.setItem('token', response.token)
      this.snackbar.openSnackBar(this.responsemessage, '')

      this.router.navigate(['/home'])
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
}


