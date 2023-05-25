import { SignupComponent } from './../signup/signup.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar3',
  templateUrl: './navbar3.component.html',
  styleUrls: ['./navbar3.component.css']
})
export class Navbar3Component implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  signupaction() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.width = "520px";
    this.dialog.open(SignupComponent, dialogconfig);

  }
}
