import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { DonorsComponent } from './pages/donors/donors.component';
import { HelpusComponent } from './pages/helpus/helpus.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { DownloadComponent } from './download/download.component';
const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'about',component:AboutComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'donors',component:DonorsComponent},
  {path:'helpus',component:HelpusComponent},
  {path:'download',component:DownloadComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


