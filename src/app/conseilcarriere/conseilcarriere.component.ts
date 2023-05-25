import { candidat } from './../Models/userann';
import { ActivatedRoute } from '@angular/router';
import { DashbordService } from './../Services/dashbord.service';
import { PostannoncecabndidatComponent } from './../postannoncecabndidat/postannoncecabndidat.component';
import { DashbordclientService } from './../Services/dashbordclient.service';
import { ProfilService } from './../Services/profil.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conseilcarriere',
  templateUrl: './conseilcarriere.component.html',
  styleUrls: ['./conseilcarriere.component.css']
})
export class ConseilcarriereComponent implements OnInit {
data:any
id:any
candida:any
pk:any

  constructor(private dialog:MatDialog,private profilservices:ProfilService,private dashbordclient:DashbordclientService,private dashbord:DashbordService,private route:ActivatedRoute) { }

  ngOnInit(): void {
  this.id=this.route.snapshot.params['id']
    this.candidats()
    this.hidenv()
  }
  postannoncecandidataction(){
    var dialogconfig=new MatDialogConfig
    dialogconfig.width="523px"
    this.dialog.open(PostannoncecabndidatComponent,dialogconfig)

  }
  candidats(){
    this.dashbord.getcandidatsrequests().subscribe((response)=>{
      this.data=response
    })
  }
  hidenv(){
    this.profilservices.hidenav().subscribe((response=>{
this.pk=response
console.log(this.pk)
    }))
  }

}
