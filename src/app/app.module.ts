import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AjouterQcmComponent } from './ajouter-qcm/ajouter-qcm.component';
import { AfficherQcmComponent } from './afficher-qcm/afficher-qcm.component';
import { MenuComponent } from './menu/menu.component';
import { RepondreQcmComponent } from './repondre-qcm/repondre-qcm.component';

@NgModule({
  declarations: [
    AppComponent,
    AjouterQcmComponent,
    AfficherQcmComponent,
    MenuComponent,
    RepondreQcmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
