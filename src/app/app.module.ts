import { MatInputModule } from '@angular/material/input';
import { LoginComponent } from './login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilComponent } from './profil/profil.component';
import { NotificationComponent } from './notification/notification.component';
import { FindjobComponent } from './findjob/findjob.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ConseilcarriereComponent } from './conseilcarriere/conseilcarriere.component';
import { DeconnexionComponent } from './deconnexion/deconnexion.component';
import { NodataComponent } from './nodata/nodata.component';
import { HomeComponent } from './home/home.component';
import { CvComponent } from './cv/cv.component';
import { AlertesComponent } from './alertes/alertes.component';
import { MesoffresComponent } from './mesoffres/mesoffres.component';
import { Navbar1Component } from './navbar1/navbar1.component';
import { Navbar2Component } from './navbar2/navbar2.component';
import { ProfilstaticComponent } from './profilstatic/profilstatic.component';
import { DashbordclientComponent } from './dashbordclient/dashbordclient.component';
import { ContactusComponent } from './contactus/contactus.component';
import { PostjobComponent } from './postjob/postjob.component';

import { ProfilstaticjobComponent } from './profilstaticjob/profilstaticjob.component';
import { GgComponent } from './gg/gg.component';


import { Navbar3Component } from './navbar3/navbar3.component';
import { PagegardeComponent } from './pagegarde/pagegarde.component';
import { OffreemploieComponent } from './offreemploie/offreemploie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SignupComponent } from './signup/signup.component';
import { NgxUiLoaderModule, SPINNER, PB_DIRECTION, NgxUiLoaderConfig } from 'ngx-ui-loader';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/accordion/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { MonProfilComponent } from './mon-profil/mon-profil.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TokenInterceptorInterceptor } from './Services/token-interceptor.interceptor';

import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { AddprofilComponent } from './addprofil/addprofil.component';
import { DeleteComponent } from './delete/delete.component';
import { AccepteComponent } from './accepte/accepte.component';
import { RefuserComponent } from './refuser/refuser.component';
import { LogoutComponent } from './logout/logout.component';
import { DashbodadminComponent } from './dashbodadmin/dashbodadmin.component';
import { ManagerecrutementComponent } from './managerecrutement/managerecrutement.component';
import { ProfilcandidatsComponent } from './profilcandidats/profilcandidats.component';
import { DashbordcandidatComponent } from './dashbordcandidat/dashbordcandidat.component';
import { PostannoncecabndidatComponent } from './postannoncecabndidat/postannoncecabndidat.component';
import { ProfilstaticannoncecandidatComponent } from './profilstaticannoncecandidat/profilstaticannoncecandidat.component';
import { ProfilstaticjobadminComponent } from './profilstaticjobadmin/profilstaticjobadmin.component';
import { ProfiluserbyidadminComponent } from './profiluserbyidadmin/profiluserbyidadmin.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { NgxEditorModule } from 'ngx-editor';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { UsertypeComponent } from './usertype/usertype.component';
import { ChangeemailComponent } from './changeemail/changeemail.component';
import { UpdatecompanyComponent } from './updatecompany/updatecompany.component';

const ngxuiloaderconfig: NgxUiLoaderConfig = {
  text: "Loading ..",
  textColor: "#FFFFFFF",
  pbColor: "green",
  bgsColor: " green",
  fgsColor: "green",
  fgsType: SPINNER.ballSpinClockwise,
  fgsSize: 100,
  pbDirection: PB_DIRECTION.leftToRight,
  pbThickness: 5

}
@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    NotificationComponent,
    FindjobComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    ConseilcarriereComponent,
    DeconnexionComponent,
    NodataComponent,
    HomeComponent,
    CvComponent,
    AlertesComponent,
    DashbodadminComponent,

    MesoffresComponent,
    LoginComponent,
    Navbar1Component,
    Navbar2Component,
    ProfilstaticComponent,
    DashbordclientComponent,
    ContactusComponent,
    PostjobComponent,
ProfilstaticjobComponent
    ,
    GgComponent,


    Navbar3Component,
    PagegardeComponent,
    OffreemploieComponent,
    SignupComponent,
    ForgetpasswordComponent,
    MonProfilComponent,
    NotfoundComponent,

    ChangepasswordComponent,
     AddprofilComponent,
     DeleteComponent,
     AccepteComponent,
     RefuserComponent,
     LogoutComponent,
     ManagerecrutementComponent,
     ProfilcandidatsComponent,
     DashbordcandidatComponent,
     PostannoncecabndidatComponent,
     ProfilstaticannoncecandidatComponent,
     ProfilstaticjobadminComponent,
     ProfiluserbyidadminComponent,
     UsertypeComponent,
     ChangeemailComponent,
     UpdatecompanyComponent,

  ],
  imports: [
    Ng2SearchPipeModule,
    BrowserModule,
    AppRoutingModule,
    MatSnackBarModule,
    MatDialogModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatInputModule,
    ScrollingModule,
    NgxEditorModule,
    FormsModule,
    HttpClientModule,
    AngularEditorModule,
    NgxUiLoaderModule.forRoot(ngxuiloaderconfig),
    RouterModule.forRoot([
      {
        path: 'cv', component: CvComponent,

      },

      {
        path: 'dashbordclient', component: DashbordclientComponent
      }

    ]),
    BrowserAnimationsModule
  ],
  providers: [HttpClientModule,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
