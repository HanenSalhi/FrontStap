import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Importez ActivatedRoute si vous l'utilisez

@Component({
  selector: 'app-root',
  template: `
    <ngx-charts-bar-vertical
      [view]="view"
      [scheme]="colorScheme"
      [results]="single"
      [gradient]="gradient"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      (select)="onSelect($event)">
    </ngx-charts-bar-vertical>
  `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // Vous pouvez accéder aux paramètres de l'URL ici
    this.route.params.subscribe(params => {
      // Utilisez params pour accéder aux paramètres de l'URL
      console.log(params);
    });
  }
}
