import { Component, OnInit } from '@angular/core';
export class Item{
  category:String;
  type:String;
  name:String;
  mfg:String;
  price:Number;
  constructor(type:String, name:String, price:Number, mfg:String, category:String){
    this.category = category;
    this.type = type;
    this.name = name;
    this.price = price;
    this.mfg = mfg;
  }
}
//security category, layer
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})

export class FiltersComponent implements OnInit {
  foods: Array<Item> = [];
  toys: Array<Item> = [];
  categories: Array<String>;
  constructor() {
    this.categories = ['Food', 'Toys'];
    let food1 = new Item('solid','dinner', 1.75, 'purina', 'food');
    let food2 = new Item('wet','chicken & rice', 2.39, 'purina', 'food');
    let toy1 = new Item('plush','Happy Emoji', 5.75, 'toyco', 'toy');
    let toy2 = new Item('electronic','laser pointer', 9.95, 'laserco', 'toy');
    let toy3 = new Item('game','feather teather', 3.95, 'tyco', 'toy');
    Array.prototype.push.apply(this.foods, [food1,food2]);
    Array.prototype.push.apply(this.toys, [toy1,toy2, toy3]);
    console.log(this.foods);
    console.log(this.toys);
  }

  ngOnInit() {
  }

}
