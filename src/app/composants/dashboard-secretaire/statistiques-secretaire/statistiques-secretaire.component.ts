import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-statistiques-secretaire',
  templateUrl: './statistiques-secretaire.component.html',
  styleUrls: ['./statistiques-secretaire.component.css']
})
export class StatistiquesSecretaireComponent {
  title = 'abir';


  lineChart=new Chart({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Patients'
    },
    credits: {
      enabled: false
    },
    series: [
      {
        name: 'Patients',
        data: [10,2, 3,6,9,17,21,10,5,2,16]
      } as any
    ]

  })

  pieChart=new Chart({
    chart: {
      type: 'pie',
      plotShadow: false,
    },
  
    credits: {
      enabled: false,
    },
  
    plotOptions: {
      pie: {
        innerSize: '99%',
        borderWidth: 10,
        borderColor: '',
        slicedOffset: 10,
        dataLabels: {
          connectorWidth: 0,
        },
      },
    },
  
    title: {
      verticalAlign: 'middle',
      floating: true,
      text: ' les Maladies',
    },
  
    legend: {
      enabled: false,
    },
  
    series: [
      {
        type: 'pie',
        data: [
          { name: 'COVID 19', y: 1, color: 'pink' },
  
          { name: 'GRIPPE', y: 2, color: '#393e46' },
  
          { name: 'CRISE CARDIAQUE', y: 3, color: '#00adb5' },
          { name: 'ALLERGIE', y: 4, color: '#eeeeee' },
          { name: 'DIABETES', y: 5, color: '#506ef9' },
        ],
      },
    ],
  })
}
