import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  myJson = [
    {'type':'solid', 'name': 'quail & pumpkin', 'price':1.75, 'mfg': 'Solid Gold', 'category': 'food', 'active' : true }
    , {'type':'wet', 'name': 'chicken & rice', 'price':2.39, 'mfg': 'Purina', 'category': 'food', 'active' : true }
    , {'type':'plushie', 'name': 'Happy Emoji', 'price':5.75, 'mfg': 'toyco', 'category': 'toy', 'active' : true }
    , {'type':'electronic', 'name': 'laser pointer', 'price':9.95, 'mfg': 'laserco', 'category': 'toy', 'active' : true }
    , {'type':'game', 'name': 'Feather Teather', 'price':1.75, 'mfg': 'tyco', 'category': 'toy', 'active' : true }
  ]
  constructor() {
   }
}
