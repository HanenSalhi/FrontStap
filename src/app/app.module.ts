import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Importez RouterModule
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; // Importez FormsModule si vous utilisez ngModel

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { CarteComponent } from './carte/carte.component';

import { CommonModule } from '@angular/common';
import { LesCartesComponent } from './les-cartes/les-cartes.component';
import { DefautComponent } from './defaut/defaut.component';
import { NCComponent } from './nc/nc.component';

import { StatsBBS } from './statsBBS/stats.component';
import { StatAVSComponent } from './stat-avs/stat-avs.component';



@NgModule({
  declarations: [
    AppComponent,
    CarteComponent,
    LesCartesComponent,
    DefautComponent,
    NCComponent,
    StatsBBS,
    StatAVSComponent
  ],
  imports: [
    BrowserModule,
    RouterModule, // Ajoutez RouterModule ici
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgxChartsModule,
    FormsModule // Ajoutez FormsModule ici si nécessaire
  ],
  providers: [], // Assurez-vous qu'il n'y a pas de fournisseur pour ActivatedRoute ici
  bootstrap: [AppComponent]
})
export class AppModule { }
