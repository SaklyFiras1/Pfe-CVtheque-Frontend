import { Globalconstants } from './../shared/global-constants';
import { Router } from '@angular/router';
import { SnackbarService } from './../Services/snackbar.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DashbodadminComponent } from '../dashbodadmin/dashbodadmin.component';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  responsemessage=''

  constructor(private dialogref:MatDialogRef<LogoutComponent>,private ngxservice:NgxUiLoaderService,private snackbar:SnackbarService,private router:Router) {
 }

  ngOnInit(): void {


  }
  lg(){
    this.ngxservice.start();

     localStorage.clear()
      this.dialogref.close()
      this.responsemessage = Globalconstants.log
      this.snackbar.openSnackBar(this.responsemessage, '')
      this.ngxservice.stop()
      this.router.navigate([''])

    }





  }
