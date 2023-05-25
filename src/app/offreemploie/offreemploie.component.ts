import { ProfilService } from './../Services/profil.service';
import { PostjobComponent } from './../postjob/postjob.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { job } from '../Models/job';
import { JobService } from '../Services/job.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-offreemploie',
  templateUrl: './offreemploie.component.html',
  styleUrls: ['./offreemploie.component.css']
})
export class OffreemploieComponent implements OnInit {
  data:any
  listjob:job[]=[]
jobs:any
  constructor(private jobservice: JobService ,private dialog:MatDialog,private profilservice:ProfilService) { }

  ngOnInit(): void {
    this.retrievealljobs()
    this.hide()
  }
  retrievealljobs() {
    this.jobservice.getjob().subscribe((data => {
      this.listjob= data ;
    })



    )
  }
  postjobaction(){
    const dialogconfig=new MatDialogConfig()
    dialogconfig.width="560px"
    this.dialog.open(PostjobComponent,dialogconfig)
  }
  hide(){
    this.profilservice.hidenav().subscribe((response:any)=>{

      this.data=response
    }

    )
  }

}
