import { Router } from '@angular/router';
import { UserService } from './../Services/user.service';
import { userprofil } from './../Models/profilModel';
import { PostjobComponent } from './../postjob/postjob.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { job } from './../Models/job';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { JobService } from '../Services/job.service';
import { runInThisContext } from 'vm';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent implements OnInit {
listjob:job[]=[]

jobs:any
  public jobtitle!: string;
  constructor(private jobservice: JobService,private userservice:UserService,private route:Router) { }

  ngOnInit(): void {


    this.retrievealljobs()

  }
  retrievealljobs() {
    this.jobservice.getjob().subscribe((data => {
      this.listjob= data ;
    })



    )
  }


    }






