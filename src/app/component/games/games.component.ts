import { HostListener, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  data = [
    {
      title: 'Carrom',
      path: 'assets/carrom.svg'
    },
    {
      title: 'tableTennies',
      path: 'assets/ping-pong.svg'
    },
    {
      title: 'Football',
      path: 'assets/football.svg'
    },
    {
      title: 'Badminton',
      path: 'assets/sports_tennis-black-18dp.svg'
    },
    {
      title: 'Cricket',
      path: 'assets/cricket.svg'
    }
  ];
  dataLen: number;
  numbers: any;
  numberOfGames = 5;
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    if (event.target.innerWidth < 450) {
      this.numberOfGames = 3;
      this.dataLen = this.data.length - this.numberOfGames;
      this.numbers = Array(this.dataLen).fill(0).map((x, i) => i);
    } else if (event.target.innerWidth < 750) {
      this.numberOfGames = 5;
    } else {
      this.numberOfGames = 5;
    }
  }

  ngOnInit(): void {
    this.dataLen = 1;
    this.numbers = Array(this.dataLen).fill(0).map((x, i) => i);
    if (window.innerWidth < 450) {
      this.numberOfGames = 3;
      this.dataLen = this.data.length - this.numberOfGames;
      this.numbers = Array(this.dataLen).fill(0).map((x, i) => i);
    } else if (window.innerWidth < 750) {
      this.numberOfGames = 5;
    } else {
      this.numberOfGames = 5;
    }
  }

}
