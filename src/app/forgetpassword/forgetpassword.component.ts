'../shared/accordion/global-constants'
import { Router } from '@angular/router';
import { UserService } from './../Services/user.service';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../Services/snackbar.service';
import { Globalconstants } from '../shared/accordion/global-constants';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  constructor(private formbuilder: FormBuilder, private ngxservice: NgxUiLoaderService, private dialogref: MatDialogRef<ForgetpasswordComponent>, private userservice: UserService, private router: Router, private snackbar: SnackbarService) { }
  forgetpasswordform: any = FormGroup
  responsemessage: any
  ngOnInit(): void {
    this.forgetpasswordform = this.formbuilder.group({
      email: [null, [Validators.required, Validators.pattern(Globalconstants.emailRegex)]]
    })

  }
  handlesubmitemail() {
    this.ngxservice.start()
    var formdata = this.forgetpasswordform.value
    var data = {
      email: formdata.email
    }
    this.userservice.forgetpassword(data).subscribe(
      (response: any) => {
        this.ngxservice.stop();
        this.dialogref.close();
        this.responsemessage = response?.message
        this.snackbar.openSnackBar(this.responsemessage, "")
        this.router.navigate([''])
      }, (error: any) => {
        this.ngxservice.stop()
        this.dialogref.close()
        if (error) {
          this.responsemessage = error?.message
        }
        else {
          this.responsemessage = Globalconstants.genericerror
        }
        this.snackbar.openSnackBar(this.responsemessage, Globalconstants.error)

      }
    )
  }



}
