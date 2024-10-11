import { Component } from '@angular/core';
import { IMoto } from '../../../i-moto';

@Component({
  selector: 'app-ducati',
  templateUrl: './ducati.component.html',
  styleUrl: './ducati.component.scss',
})
export class DucatiComponent {
  ducatiArr: IMoto[] = [];
  randomIndex: number = 0;

  ngOnInit() {
    fetch('db.json')
      .then((res) => res.json())
      .then((motoArray) => {
        this.ducatiArr = motoArray.filter(
          (moto: { brand: string }) => moto.brand === 'Ducati'
        );
        console.log(this.ducatiArr);
      });
  }
}
