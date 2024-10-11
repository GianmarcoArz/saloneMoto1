import { Component } from '@angular/core';
import { IMoto } from '../../../i-moto';

@Component({
  selector: 'app-yamaha',
  templateUrl: './yamaha.component.html',
  styleUrl: './yamaha.component.scss',
})
export class YamahaComponent {
  yamahaArr: IMoto[] = [];
  randomIndex: number = 0;

  ngOnInit() {
    fetch('db.json')
      .then((res) => res.json())
      .then((motoArray) => {
        this.yamahaArr = motoArray.filter(
          (moto: { brand: string }) => moto.brand === 'Yamaha'
        );
        console.log(this.yamahaArr);
      });
  }
}
