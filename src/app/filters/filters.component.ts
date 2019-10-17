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
//security catergory, layer
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})

export class FiltersComponent implements OnInit {
  foods:Array<Item>;
  categories: Array<String>;
  constructor() {
    this.categories = ['Food', 'Toys'];
    this.foods = [];
    let food1 = new Item('solid','dinner', 1.75, 'purina', 'food');
    let food2 = new Item('wet','chicken & rice', 1.75, 'purina', 'food');
    
    Array.prototype.push.apply(this.foods, [food1,food2])
    console.log(this.foods);
  }

  ngOnInit() {
  }

}
