import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  myJson = [
    {'id':1,'type':'solid', 'name': 'quail & pumpkin', 'price':1.75, 'mfg': 'Solid Gold', 'category': 'food', 'active' : true }
    , {'id':2,'type':'wet', 'name': 'chicken & rice', 'price':2.39, 'mfg': 'Purina', 'category': 'food', 'active' : true }
    , {'id':3,'type':'plushie', 'name': 'Happy Emoji', 'price':5.75, 'mfg': 'toyco', 'category': 'toy', 'active' : true }
    , {'id':4,'type':'electronic', 'name': 'laser pointer', 'price':9.95, 'mfg': 'laserco', 'category': 'toy', 'active' : true }
    , {'id':5,'type':'game', 'name': 'Feather Teather', 'price':1.75, 'mfg': 'tyco', 'category': 'toy', 'active' : true }
  ]
  constructor() {
   }
}
