import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-nc',
  templateUrl: './nc.component.html',
  styleUrls: ['./nc.component.css']
})
export class NCComponent implements OnInit {
  // Propriétés pour stocker les valeurs des champs de filtrage
  filterCode: string = '';
  filterTypeDefaut: string = '';
  filterUtilisateur: string = '';
  filterLibelle: string = '';

  // Propriété pour stocker les données NC
  ncs: any[] = [];
  // Propriété pour stocker les données NC filtrées
  filteredNCs: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllNCs();
  }

  // Méthode pour récupérer toutes les données NC depuis le serveur
  getAllNCs(): void {
    this.http.get<any[]>('http://localhost:8081/api/ncs')
      .subscribe(data => {
        this.ncs = data;
        // Appliquer les filtres initiaux
        this.applyFilters();
      });
  }

  // Méthode pour appliquer les filtres
  applyFilters(): void {
    this.filteredNCs = this.ncs.filter(nc =>
      nc.code.includes(this.filterCode) &&
      nc.typeDefaut.includes(this.filterTypeDefaut) &&
      nc.utilisateur.includes(this.filterUtilisateur) &&
      nc.libelle.includes(this.filterLibelle)
    );
  }
}
