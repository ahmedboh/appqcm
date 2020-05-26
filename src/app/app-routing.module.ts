import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjouterQcmComponent } from './ajouter-qcm/ajouter-qcm.component';
import { AfficherQcmComponent } from './afficher-qcm/afficher-qcm.component';
import { RepondreQcmComponent } from './repondre-qcm/repondre-qcm.component';

const routes: Routes = [
  {path:'ajouter', component:AjouterQcmComponent},
  {path:'afficher', component:AfficherQcmComponent},
  {path:'afficher/passerQcm/:id', component:RepondreQcmComponent},
  {path:'', redirectTo:'ajouter', pathMatch:'full'}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
