import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Item } from '../classes/item';
import { FiltersService } from '../services/filters.service';

@Component({
  selector: 'app-center-accordion',
  templateUrl: './center-accordion.component.html',
  styleUrls: ['./center-accordion.component.scss']
})
export class CenterAccordionComponent implements OnInit {
  myJson: Array<Object>;
  items: Array<Item> = [];
  constructor(
    private data: DataService
    , private _filterService: FiltersService
  ) {
    this.myJson = data.myJson;
  }

  ngOnInit() {
    this.myJson.forEach(item => {
      let tempItem = new Item(item['type'], item['name'], item['price'], item['mfg'], item['category'], item['active']);
      this.items.push(tempItem);
    });
    this._filterService.filterBehaviorSubject.subscribe(filters => {
      if(filters.length != 0){
        console.log('filters: ', filters);
        this.items = [];
        this.items = filters;
      }
      
    });
  }

}
