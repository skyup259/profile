import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  data = [
    {
      title: 'Angular',
      percentage: '70',
      experience: '3'
    },
    {
      title: 'AngularJS',
      percentage: '60',
      experience: '3'
    },
    {
      title: 'HTML',
      percentage: '85',
      experience: '3'
    },
    {
      title: 'CSS',
      percentage: '70',
      experience: '3'
    },
    {
      title: 'TypeScript',
      percentage: '70',
      experience: '3'
    },
    {
      title: 'Kibana',
      percentage: '85',
      experience: '1'
    },
    {
      title: 'AWS',
      percentage: '35',
      experience: '.5'
    },
    {
      title: 'C',
      percentage: '60',
      experience: '5'
    },
    {
      title: 'C++',
      percentage: '70',
      experience: '5'
    }
  ];


  dataLen: number;
  numbers: any;
  constructor() { }

  ngOnInit(): void {
    this.dataLen = this.data.length - 5;
    this.numbers = Array(this.dataLen).fill(0).map((x, i) => i);
  }

}
