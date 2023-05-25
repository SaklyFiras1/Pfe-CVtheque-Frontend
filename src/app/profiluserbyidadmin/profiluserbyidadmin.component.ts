import { DashbordService } from './../Services/dashbord.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profiluserbyidadmin',
  templateUrl: './profiluserbyidadmin.component.html',
  styleUrls: ['./profiluserbyidadmin.component.css']
})
export class ProfiluserbyidadminComponent implements OnInit {
id:any
data:any=[]
  constructor(private route:ActivatedRoute,private dashbordservice:DashbordService) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
    this.getprofilcandidats()
  }
  getprofilcandidats(){
    this.dashbordservice.getprofil(this.id).subscribe((response)=>{
      this.data=response
      console.log(this.data)
    })
  }

}
