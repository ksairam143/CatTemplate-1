import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Item } from '../classes/item';
import { FiltersService } from '../services/filters.service';

//security category, layer
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})

export class FiltersComponent implements OnInit {
  items: Array<Item> = [];
  categories: Array<String>;
  myJson: Array<Object>;
  constructor(
    private _data: DataService
    , private _filtersService: FiltersService 
  ) {
    this.categories = ['Food', 'Toys'];
    console.log(this.items);
    this.myJson = _data.myJson;
    
  }

  ngOnInit() {
    this.myJson.forEach(item => {
      let tempItem = new Item(item['type'], item['name'], item['price'], item['mfg'], item['category'], item['active']);
      this.items.push(tempItem);
    });
  }
  change(item: String) {
    let filterItems: Array<Item> = [];
    console.log(item);
    this.items.forEach(myItem => {
      if(item == myItem.name){
        myItem.active = !myItem.active; 
        console.log('!myItem.active: ' + !myItem.active);
      }
      filterItems.push(myItem);
    });
    this._filtersService.refreshFilters(this.items);
  }

}
