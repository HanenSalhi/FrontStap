import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StatsBBS} from './statsBBS/stats.component'; // Import du composant StatsComponent
import { CarteComponent } from './carte/carte.component';
import { LesCartesComponent } from './les-cartes/les-cartes.component';
import { DefautComponent } from './defaut/defaut.component';
import { NCComponent } from './nc/nc.component';
import { StatAVSComponent } from './stat-avs/stat-avs.component';



const routes: Routes = [
  {path:'statAVS',component:StatAVSComponent},
  { path: 'statBBS', component: StatsBBS },
  { path: 'carte', component: CarteComponent } ,
  { path: 'lescartes', component: LesCartesComponent},
  { path: 'lesDefauts', component: DefautComponent},
  { path: 'NC', component: NCComponent}// Ajout de la route pour le composant StatsComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
