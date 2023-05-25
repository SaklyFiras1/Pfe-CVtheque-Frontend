import { MatDialogRef } from '@angular/material/dialog';
import { Route, ActivatedRoute } from '@angular/router';
import { DashbordService } from './../Services/dashbord.service';
import { Component, OnInit } from '@angular/core';
import { DashbodadminComponent } from '../dashbodadmin/dashbodadmin.component';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
id:any
prepostjob:any=[]
  constructor(private dashbordservice:DashbordService,private route :ActivatedRoute,private matdialogref:MatDialogRef<DashbodadminComponent>) {    this.id=this.route.snapshot.params['id'] }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id']
  }
  deletejobpre(id:any) {
    console.log(id);

      this.dashbordservice.deletejob(id).subscribe((res) => {
      return res
      })
    }
  }


