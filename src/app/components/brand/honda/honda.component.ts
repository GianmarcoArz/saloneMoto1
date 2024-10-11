import { Component } from '@angular/core';
import { IMoto } from '../../../i-moto';

@Component({
  selector: 'app-honda',
  templateUrl: './honda.component.html',
  styleUrl: './honda.component.scss',
})
export class HondaComponent {
  hondaArr: IMoto[] = [];
  randomIndex: number = 0;

  ngOnInit() {
    fetch('db.json')
      .then((res) => res.json())
      .then((motoArray) => {
        this.hondaArr = motoArray.filter(
          (moto: { brand: string }) => moto.brand === 'Honda'
        );
        console.log(this.hondaArr);
      });
  }
}
