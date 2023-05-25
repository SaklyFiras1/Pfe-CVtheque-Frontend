import { ActivatedRoute } from '@angular/router';
import { DashbordclientService } from './../Services/dashbordclient.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilcandidats',
  templateUrl: './profilcandidats.component.html',
  styleUrls: ['./profilcandidats.component.css']
})
export class ProfilcandidatsComponent implements OnInit {
id:any
prepostjob:any
  constructor(private dashbordclient:DashbordclientService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.viewprofil()

  }
  viewprofil(){
    this.dashbordclient.view(this.id).subscribe((data=>{

       this.prepostjob=data
       console.log(this.prepostjob)
  }))
  }

}
