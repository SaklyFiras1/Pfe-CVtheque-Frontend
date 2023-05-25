
import { DashbordService } from './../Services/dashbord.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profilstaticjobadmin',
  templateUrl: './profilstaticjobadmin.component.html',
  styleUrls: ['./profilstaticjobadmin.component.css']
})
export class ProfilstaticjobadminComponent implements OnInit {
id:any

prepostjo:any=[]
  constructor(private route:ActivatedRoute,private dashbordservice:DashbordService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.retreiveprepostjobs()

  }
  retreiveprepostjobs(){
    this.dashbordservice.prepostjobrequests(this.id).subscribe((data=>{


 this.prepostjo=data
console.log((this.prepostjo))



    }))
  }

}
