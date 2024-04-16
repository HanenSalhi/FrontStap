import { Component, OnInit } from '@angular/core';
import { CarteService } from './../carte.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css'],
  providers: [CarteService]
})
export class CarteComponent implements OnInit {
  currentTime: string | undefined;
  title = 'angular';
  cartes: any[] = [];
  code: string = '';
  designation: string = '';
  date: string = '';

  constructor(
    private carteService: CarteService,
    private http: HttpClient
  ) {}

  ngOnInit() {
    this.getLatestCartes();
    this.updateCurrentTime();
    setInterval(() => {
      this.updateCurrentTime();
    }, 1000);
  }

  getLatestCartes() {
    const url = 'http://localhost:8081/api/cartes/latest';

    this.http.get<any[]>(url).subscribe((data: any[]) => {
      this.cartes = data;
    });
  }

  getAllCartes() {
    this.carteService.getAllCartes().subscribe((data: any[]) => {
      this.cartes = data;
    });
  }

  searchByCode() {
    this.carteService.searchByCode(this.code).subscribe((data: any[]) => {
      this.cartes = data;
    });
  }

  searchByCriteria() {
    this.carteService.searchByCriteria(this.code, this.designation, this.date)
      .subscribe((data) => {
        this.cartes = data;
      });
  }

  reset() {
    this.code = '';
    this.designation = '';
    this.date = '';
    this.cartes = [];
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toISOString();
  }

  downloadCSV(): void {
    const header = ['Code', 'Désignation', 'Date d\'entrée', 'Date de sortie', 'uap'];
    const csvData = [header];

    this.cartes.forEach(carte => {
      const rowData = [
        carte.code,
        carte.designation,
        carte.dateIn,
        carte.dateOut,
        carte.uap
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
  updateCurrentTime(): void {
    const  date = new Date();
    this.currentTime = date.toLocaleString(); // Format de date et d'heure local
  }
}
