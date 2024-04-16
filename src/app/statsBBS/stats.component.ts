import { Component, OnInit } from '@angular/core';
import { StatService } from './../stat.service';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsBBS implements OnInit {

  statistics: any;
  colorScheme: Color = {
    name: 'cool', // Nom du schéma de couleurs
    selectable: true, // Indique si les couleurs peuvent être sélectionnées
    group: ScaleType.Ordinal, // Groupe de couleurs (Ordinal, Linear, etc.)
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'] // Tableau de couleurs
  };

  constructor(private statService: StatService) { }

  ngOnInit(): void {
    this.statService.getStatistics().subscribe(data => {
      this.statistics = this.formatChartData(data);
    });
  }

  // Méthode pour formater les données pour les graphiques ngx-charts
  formatChartData(data: any): any[] {
    const chartData: any[] = [];
    Object.keys(data).forEach(category => {
      const categoryData: any[] = [];
      Object.entries(data[category]).forEach(([key, value]) => {
        categoryData.push({ name: key, value: value });
      });
      chartData.push({ name: category, series: categoryData });
    });
    return chartData;
  }
}
