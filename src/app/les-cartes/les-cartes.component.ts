import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-les-cartes',
  templateUrl: './les-cartes.component.html',
  styleUrls: ['./les-cartes.component.css']
})
export class LesCartesComponent implements OnInit {
  cartes: any[] = [];
  dateCreation: Date | null = null;
  matricule: string = '';
  nomProduit: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getAllCartes();
  }

  getAllCartes(): void {
    let url = 'http://localhost:8081/cartesR/get';
    if (this.dateCreation || this.matricule || this.nomProduit) {
      url += '?';
      if (this.dateCreation) {
        // Formater la date au format ISO 8601
        const formattedDate = this.dateCreation.toISOString();
        url += `dateCreation=${formattedDate}&`;
      }
      if (this.matricule) {
        url += `matricule=${this.matricule}&`;
      }
      if (this.nomProduit) {
        url += `nomProduit=${this.nomProduit}&`;
      }
    }
    this.http.get<any[]>(url)
      .subscribe(
        (response) => {
          console.log(response);
          this.cartes = response;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  applyFilters(): void {
    this.getAllCartes();
  }
  downloadCSV(): void {
    const header = ['Numéro de série', 'Matricule', 'Date de création', 'Date de modification', 'Nom de Produit'];
    const csvData = [header];

    this.cartes.forEach(carte => {
      const rowData = [
        carte.numeroSerie,
        carte.matricule,
        carte.dateCreation,
        carte.dateModification,
        carte.carte1.designation
      ];
      csvData.push(rowData);
    });

    const csvContent = csvData.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob);
      link.setAttribute('href', url);
      link.setAttribute('download', 'cartes.csv');
      link.style.visibility = 'hidden';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

}
