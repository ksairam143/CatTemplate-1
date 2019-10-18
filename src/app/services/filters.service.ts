import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { Item } from '../classes/item';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  constructor(
  ) { }

  filterObj: Array<Item> = [];
    filterBehaviorSubject = new BehaviorSubject<Array<Item>>(this.updateFilters());
    refreshFilters(filterSettings: Array<Item>): void {
        this.filterObj = filterSettings;
        this.filterBehaviorSubject.next(filterSettings);
    }
    private updateFilters(): Array<Item> {
        return this.filterObj;
    }
}
