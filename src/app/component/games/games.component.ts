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
      path: 'assets/badminton.png'
    },
    {
      title: 'Cricket',
      path: 'assets/cricket.svg'
    },
    {
      title: 'Computer Games',
      path: 'assets/computergames.svg'
    },
    {
      title: 'Computer Games',
      path: 'assets/computergames.svg'
    }
  ];
  dataLen: number;
  numbers: any;
  numberOfGames = 6;
  constructor() { }

  @HostListener('window:resize', ['$event'])
  onResize(event): void {
    if (event.target.innerWidth < 450) {
      this.numberOfGames = 3;
    } else if (event.target.innerWidth < 780) {
      this.numberOfGames = 5;
    } else {
      this.numberOfGames = 6;
    }
    this.dataLen = this.data.length - this.numberOfGames;
    this.numbers = Array(this.dataLen).fill(0).map((x, i) => i);
  }

  ngOnInit(): void {
    if (window.innerWidth < 450) {
      this.numberOfGames = 3;
    } else if (window.innerWidth < 780) {
      this.numberOfGames = 5;
    } else {
      this.numberOfGames = 6;
    }
    this.dataLen = this.data.length - this.numberOfGames;
    this.numbers = Array(this.dataLen).fill(0).map((x, i) => i);
  }

}
