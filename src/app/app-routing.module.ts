import { ProfiluserbyidadminComponent } from './profiluserbyidadmin/profiluserbyidadmin.component';
import { ProfilstaticannoncecandidatComponent } from './profilstaticannoncecandidat/profilstaticannoncecandidat.component';
import { ProfilcandidatsComponent } from './profilcandidats/profilcandidats.component';
import { ManagerecrutementComponent } from './managerecrutement/managerecrutement.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { DeleteComponent } from './delete/delete.component';
import { AddprofilComponent } from './addprofil/addprofil.component';
import { RouteGuardService } from './Services/route-guard.service';


import { NodataComponent } from './nodata/nodata.component';
import { ConseilcarriereComponent } from './conseilcarriere/conseilcarriere.component';
import { FindjobComponent } from './findjob/findjob.component';
import { ProfilComponent } from './profil/profil.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProfilstaticComponent } from './profilstatic/profilstatic.component';
import { ContactusComponent } from './contactus/contactus.component';
import { DashbordclientComponent } from './dashbordclient/dashbordclient.component';
import { DashbodadminComponent } from './dashbodadmin/dashbodadmin.component';
import { PostjobComponent } from './postjob/postjob.component';
import { ProfilstaticjobComponent } from './profilstaticjob/profilstaticjob.component';
import { GgComponent } from './gg/gg.component';
import { PagegardeComponent } from './pagegarde/pagegarde.component';
import { OffreemploieComponent } from './offreemploie/offreemploie.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfilstaticjobadminComponent } from './profilstaticjobadmin/profilstaticjobadmin.component';



const routes: Routes = [
  {
    path: 'profil', component: ProfilComponent,canActivate:[RouteGuardService],data:{expectedRole:['user']}

  },
  {
    path: 'findjob', component: FindjobComponent,canActivate:[RouteGuardService],data:{expectedRole:['user']}

  },
  {
    path: 'CandidatsAnnonces', component: ConseilcarriereComponent,canActivate:[RouteGuardService],data:{expectedRole:['user']}

  },
  {
    path: 'nodatafo', component: NodataComponent,canActivate:[RouteGuardService],data:{expectedRole:['user']}

  },
  {
    path: 'Candidatsbadge/:id', component: ProfiluserbyidadminComponent,canActivate:[RouteGuardService],data:{expectedRole:['admin']}

  },
  {
    path: 'home', component: HomeComponent,canActivate:[RouteGuardService],data:{expectedRole:['user']}


  },
  {
    path: 'gg', component: GgComponent,canActivate:[RouteGuardService],data:{expectedRole:['user']}
  },
  {
    path: 'annoncecandidat/:id', component: ProfilstaticannoncecandidatComponent,canActivate:[RouteGuardService],data:{expectedRole:['user']}
  },

  {
    path: 'Profilstatic/:id', component: ProfilstaticComponent,canActivate:[RouteGuardService],data:{expectedRole:['user']}
  },

  {
    path: 'annoncecandidat/:id', component: ProfilstaticannoncecandidatComponent,canActivate:[RouteGuardService],data:{expectedRole:['user']}
  }
  ,

  {
    path: 'prepostjob/:id', component: ProfilstaticjobadminComponent,canActivate:[RouteGuardService],data:{expectedRole:['admin']}
  }
  ,

  {
    path: 'contactus', component: ContactusComponent,canActivate:[RouteGuardService],data:{expectedRole:['user']}

  }
  ,

  {
    path: 'dashbordadmin', component: DashbodadminComponent,canActivate:[RouteGuardService],data:{expectedRole:['admin']}


  }
  ,


  {
    path: 'dashbordclient', component: DashbordclientComponent,canActivate:[RouteGuardService],data:{expectedRole:['user']}

  }
  ,

  {
    path: 'profilstaticjob/:id', component: ProfilstaticjobComponent,canActivate:[RouteGuardService],data:{expectedRole:['user','admin']}

  }
  ,

  {
    path: 'candidat/:id', component: ProfilcandidatsComponent,canActivate:[RouteGuardService],data:{expectedRole:['user']}

  }
  ,

  {
    path: '', component: PagegardeComponent,pathMatch: 'full'

  },
  {
    path: 'offreemploie', component: OffreemploieComponent,canActivate:[RouteGuardService],data:{expectedRole:['user']}
  }
  ,
  {
    path: 'addprofil', component: AddprofilComponent
  }
,

  {
    path: 'ManageCandidats/:id', component:ManagerecrutementComponent,canActivate:[RouteGuardService],data:{expectedRole:['user']}
  }
  ,

 { path: '**',
 component:NotfoundComponent,canActivate:[RouteGuardService],data:{expectedRole:['user'] }
 }
];






@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
