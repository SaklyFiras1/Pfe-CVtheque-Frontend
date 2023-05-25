import { ProfilService } from './../Services/profil.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profilstatic',
  templateUrl: './profilstatic.component.html',
  styleUrls: ['./profilstatic.component.css']
})
export class ProfilstaticComponent implements OnInit {
id:any
data:any
  constructor(private route:ActivatedRoute,private profilservice:ProfilService) { }

  ngOnInit(): void {

    this.id=this.route.snapshot.params['id']
    this.getprofilpostuleur()
  }

getprofilpostuleur(){
  this.profilservice.getprofilspostuleur(this.id).subscribe((data=>{
   console.log(data)
  }))


}}
