import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-stat-avs',
  templateUrl: './stat-avs.component.html',
  styleUrls: ['./stat-avs.component.css']
})
export class StatAVSComponent implements OnInit {

  statisticsAVS: any;
  colorScheme: Color = {
    name: 'cool',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>('http://localhost:8081/stats/AVS').subscribe(data => {
      this.statisticsAVS = this.formatData(data);
    });
  }

  formatData(data: any): any[] {
    const formattedData: any[] = [];
    Object.keys(data).forEach(category => {
      const categoryData: any[] = [];
      Object.entries(data[category]).forEach(([key, value]) => {
        categoryData.push({ name: key, value: value });
      });
      formattedData.push({ name: category, series: categoryData });
    });
    return formattedData;
  }

}
