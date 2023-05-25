import { DashbordService } from './../Services/dashbord.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accepte',
  templateUrl: './accepte.component.html',
  styleUrls: ['./accepte.component.css']
})
export class AccepteComponent implements OnInit {
id:any
data:any
jobpre:any
  constructor(private route:ActivatedRoute,private dashbordservice:DashbordService) { this.id=this.route.snapshot.params['id']}

  ngOnInit(): void {
  }
  postjobreq(){
    this.dashbordservice.postjobreq(this.id,this.data).subscribe((data=>{
  return this.jobpre =data
    }))

  }

}

