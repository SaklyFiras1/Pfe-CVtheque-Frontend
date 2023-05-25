import { SnackbarService } from './../Services/snackbar.service';
import { Globalconstants } from './../shared/accordion/global-constants';
import { UserService } from './../Services/user.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
contactform:any=FormGroup
  responsemessage=''

  constructor(private ngxservice:NgxUiLoaderService,private userservice:UserService,private formbuilder:FormBuilder,private snackbar:SnackbarService,private router:Router) { }

  ngOnInit(): void {
    this.contactform=this.formbuilder.group({
      email:[null,[Validators.required]],
      subject:[null,[Validators.required]]
    

    })

  }
  handlecontact(){
    this.ngxservice.start()
    const fd =new FormData()
    var formdata=this.contactform.value
    fd.append('email',formdata.email)
    fd.append('subject',formdata.subject)

      this.userservice.contactus(fd).subscribe((response:any)=>{
         this.ngxservice.stop()
      this.responsemessage = response?.message
      this.snackbar.openSnackBar(this.responsemessage, '')

      this.router.navigate(['home'])
    
    

    }, (error: any) => {
      this.ngxservice.stop()

      if (error.errors?.message) {
        this.responsemessage = error.error?.message
      }
      else {
        this.responsemessage = Globalconstants.genericerror
      }
      this.snackbar.openSnackBar(this.responsemessage, Globalconstants.error)
    }
    )




  }
 }






