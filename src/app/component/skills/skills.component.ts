import { HostListener, Component, OnInit } from '@angular/core';

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
  numberOfSkills = 6;


  dataLen: number;
  numbers: any;
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    if (event.target.innerWidth < 450) {
      this.numberOfSkills = 2;
    } else if (event.target.innerWidth < 750) {
      this.numberOfSkills = 3;
    } else {
      this.numberOfSkills = 6;
    }
  }


  ngOnInit(): void {
    this.dataLen = this.data.length - 5;
    this.numbers = Array(this.dataLen).fill(0).map((x, i) => i);
    if (window.innerWidth < 450) {
      this.numberOfSkills = 2;
    } else if (window.innerWidth < 750) {
      this.numberOfSkills = 3;
    } else {
      this.numberOfSkills = 6;
    }
  }

}
