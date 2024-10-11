import { Component } from '@angular/core';
import { IMoto } from '../../i-moto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  homeImg: string[] = [
    'https://www.franzrusso.it/wp-content/uploads/2021/11/grazievale-social-media-valentino-rossi-intime-blog-gettyimages.jpg',
    'https://media.gqitalia.it/photos/65549b0eae3e2c2f94a251f1/16:9/w_1920,h_1080,c_limit/Le%20moto%20piu%CC%80%20fighe%20viste%20a%20Eicma%202023.jpg',
    'https://media.gqitalia.it/photos/636c3443117e9181222e09cc/master/w_1600%2Cc_limit/gmr65043.jpg',
    'https://www.yamaha-motor.eu/content/dam/yme/it/promozioni/1920x1080_tracer9.jpg',
  ];
  motoArr: IMoto[] = [];
  ducatiArr: IMoto[] = [];
  yamahaArr: IMoto[] = [];
  hondaArr: IMoto[] = [];

  imgArrayIndex: number = 0;
  randomIndex: number = 0;
  randomIndex2: number = 0;

  ngOnInit() {
    setInterval(() => {
      this.imgArrayIndex = (this.imgArrayIndex + 1) % this.homeImg.length;
    }, 3000);
    fetch('db.json')
      .then((res) => res.json())
      .then((motoArray) => {
        this.motoArr = motoArray;
        this.ducatiArr = this.motoArr.filter((moto) => moto.brand === 'Ducati');
        console.log(this.ducatiArr);
        this.yamahaArr = this.motoArr.filter((moto) => moto.brand === 'Yamaha');
        console.log(this.yamahaArr);
        this.hondaArr = this.motoArr.filter((moto) => moto.brand === 'Honda');
        console.log(this.hondaArr);

        this.randomIndex = Math.floor(Math.random() * 12);
        this.randomIndex2 = Math.floor(Math.random() * 12);
      });
  }

  switchimg() {
    return this.homeImg[this.imgArrayIndex];
  }
  cardStyle = {
    transition: 'box-shadow 0.9s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)',
  };

  onMouseEnter() {
    this.cardStyle.boxShadow = '0 24px 40px rgba(0, 0, 0, 1)';
  }

  onMouseLeave() {
    this.cardStyle.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.5)';
  }
}
