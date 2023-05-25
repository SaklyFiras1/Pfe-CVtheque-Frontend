import { Globalconstants } from './../shared/global-constants';
import { DashbodadminComponent } from './../dashbodadmin/dashbodadmin.component';
import { MatDialogRef } from '@angular/material/dialog';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { SnackbarService } from '../Services/snackbar.service';

import { DashbordService } from '../Services/dashbord.service';

@Component({
  selector: 'app-refuser',
  templateUrl: './refuser.component.html',
  styleUrls: ['./refuser.component.css']
})
export class RefuserComponent implements OnInit {
refusform:any=FormGroup
responsemessage=''
  constructor(private formbuilder:FormBuilder,private ngxservice:NgxUiLoaderService,private snackbar:SnackbarService,private dashbordservice:DashbordService
   ,private dialogRef:MatDialogRef<DashbodadminComponent> ) { }

  ngOnInit(): void {

    this.refusform=this.formbuilder.group({
    to:[null, [Validators.required, Validators.pattern(Globalconstants.emailRegex)]],
     text: [null,Validators.required ]
    })
  }


  handlesubmit() {
    this.ngxservice.start();
    var formdata = this.refusform.value;
    var data = {
     to: formdata.to,
      text: formdata.text
    }
    this.dashbordservice.SendRefusereq(data).subscribe((response: any) => {
      this.ngxservice.stop()
      this.dialogRef.close()
      this.responsemessage = response?.message
      this.snackbar.openSnackBar(this.responsemessage, '')

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
