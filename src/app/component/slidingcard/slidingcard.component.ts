import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slidingcard',
  templateUrl: './slidingcard.component.html',
  styleUrls: ['./slidingcard.component.css']
})
export class SlidingcardComponent implements OnInit {
  data = [
    {
      event: '../../../assets/book1.jpg',
      caption: '07/14/20 - 07/19/20',
      descripation: 'Meluha is a near perfect empire, created many centuries earlier by Lord Ram, one of the greatest Hindu kings that ever lived. However, the once proud empire and its Suryavanshi rulers face severe crisis as its primary river, Saraswati, is slowly drying to extinction.'
    },
    {
      event: '../../../assets/book2.jpg',
      caption: '07/22/20 - 08/3/20',
      descripation: ' The story takes place in the imaginary land of Meluha and narrates how the inhabitants of that land are saved from their wars by a nomad named Shiva.'
    },
    {
      event: '../../../assets/book3.jpg',
      caption: '08/12/20 - 08/30/20',
      descripation: 'The battle rages on and Shiva travels to the land of Pariha to consult with Vayuputras, a legendary tribe. By the time he returns, the war has ended with Sati, his wife, being murdered.'
    },
    {
      event: '../../../assets/book2.jpg',
      caption: '07/22/20 - 08/3/20',
      descripation: ' The story takes place in the imaginary land of Meluha and narrates how the inhabitants of that land are saved from their wars by a nomad named Shiva.'
    },
    {
      event: '../../../assets/book3.jpg',
      caption: '07/22/20 - 08/3/20',
      descripation: 'The battle rages on and Shiva travels to the land of Pariha to consult with Vayuputras, a legendary tribe. By the time he returns, the war has ended with Sati, his wife, being murdered.'
    },
    {
      event: '../../../assets/book3.jpg',
      caption: '07/22/20 - 08/3/20',
      descripation: 'The battle rages on and Shiva travels to the land of Pariha to consult with Vayuputras, a legendary tribe. By the time he returns, the war has ended with Sati, his wife, being murdered.'
    },
    {
      event: '../../../assets/book3.jpg',
      caption: '07/22/20 - 08/3/20',
      descripation: 'The battle rages on and Shiva travels to the land of Pariha to consult with Vayuputras, a legendary tribe. By the time he returns, the war has ended with Sati, his wife, being murdered.'
    },
    {
      event: '../../../assets/book1.jpg',
      caption: '07/14/20 - 07/19/20',
      descripation: 'Meluha is a near perfect empire, created many centuries earlier by Lord Ram, one of the greatest Hindu kings that ever lived. However, the once proud empire and its Suryavanshi rulers face severe crisis as its primary river, Saraswati, is slowly drying to extinction.'
    },
    {
      event: '../../../assets/book2.jpg',
      caption: '07/22/20 - 08/3/20',
      descripation: ' The story takes place in the imaginary land of Meluha and narrates how the inhabitants of that land are saved from their wars by a nomad named Shiva.'
    }
  ];

  dataLen: number;
  numbers: any;
  constructor() { }

  ngOnInit(): void {
    this.dataLen = this.data.length - 6;
    this.numbers = Array(this.dataLen).fill(0).map((x, i) => i);
  }

}
