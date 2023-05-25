import { Router } from '@angular/router';
import { UserService } from './../Services/user.service';
import { LoginComponent } from './../login/login.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { SignupComponent } from '../signup/signup.component';
import { ForgetpasswordComponent } from '../forgetpassword/forgetpassword.component';

@Component({
  selector: 'app-pagegarde',
  templateUrl: './pagegarde.component.html',
  styleUrls: ['./pagegarde.component.css']
})
export class PagegardeComponent implements OnInit {

  constructor(private route :Router,private dialog: MatDialog, private userservice: UserService, private router: Router) {
  }

  ngOnInit(): void {
    if(localStorage.getItem('token')!=null){
      this.userservice.checktoken().subscribe((response:any)=>{
        this.route.navigate(['home'])
      },(error:any)=>{
        console.log(error)
      })
    }

  }
  signupaction() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.width = "520px";
    this.dialog.open(SignupComponent, dialogconfig)


  }
  signinaction() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.width = "520px";
    this.dialog.open(LoginComponent, dialogconfig)
  }
  forgetpasswordaction() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.width = "520px"
    this.dialog.open(ForgetpasswordComponent, dialogconfig)
  }
}
