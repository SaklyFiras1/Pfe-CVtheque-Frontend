import { ActivatedRoute } from '@angular/router';
import { ProfilService } from './../Services/profil.service';
import { Component, OnInit } from '@angular/core';
import { userprofil } from '../Models/profilModel';

@Component({
  selector: 'app-profilstaticannoncecandidat',
  templateUrl: './profilstaticannoncecandidat.component.html',
  styleUrls: ['./profilstaticannoncecandidat.component.css']
})
export class ProfilstaticannoncecandidatComponent implements OnInit {
  userprofil:any=[]
  anno:any
id:any
  constructor(private profil:ProfilService,private route:ActivatedRoute) { }

  ngOnInit(): void {
this.id=this.route.snapshot.params['id']
this.getcandidatannonceid()

  }
  getcandidatannonceid(){
    this.profil.getannoncebyid(this.id).subscribe((data=>{
      console.log(data)
  return this.userprofil=data


    }))
  }

}
