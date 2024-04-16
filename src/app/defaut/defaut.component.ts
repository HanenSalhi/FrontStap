import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-defaut',
  templateUrl: './defaut.component.html',
  styleUrls: ['./defaut.component.css']
})
export class DefautComponent implements OnInit {

  defauts: any[] = [];
  filteredDefauts: any[] = [];
  matricule: string = '';
  numeroSerie: string = '';
  libelle: string = '';
  uap: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllDefauts();
  }

  getAllDefauts(): void {
    this.http.get<any[]>('http://localhost:8081/api/defauts')
      .subscribe(data => {
        this.defauts = data;
        this.filteredDefauts = data; // Initialisation des défauts filtrés avec tous les défauts
      });
  }

  filterDefauts(): void {
    this.filteredDefauts = this.defauts.filter(defaut =>
      defaut.utilisateur.matricule.includes(this.matricule) &&
      defaut.carteR.numeroSerie.includes(this.numeroSerie) &&
      defaut.nc.libelle.includes(this.libelle) &&
      defaut.carteR.carte1.uap.includes(this.uap)
    );
  }
}
