import { Injectable } from '@angular/core';
import { Item } from './item.interface';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  private items: Item[] = [
    {
      id: '1',
      name: 'Apples',
      imageUrl: 'https://ychef.files.bbci.co.uk/976x549/p07v2wjn.jpg',
      description: 'A bundle of crispy apples.'
    },
    {
      id: '2',
      name: 'Oranges',
      imageUrl: 'https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg',
      description: 'Juicy easy peal oranges'
    },
    {
      id: '3',
      name: 'Grapes',
      imageUrl: 'https://snaped.fns.usda.gov/sites/default/files/styles/crop_ratio_7_5/public/seasonal-produce/2018-05/grapes_0.jpg?itok=uYYnmpTm',
      description: 'Bunches of seedless grapes.'
    }
  ];

  constructor() { }

  getAllItems() {
    return [...this.items]
  }

  getItem(itemId: string) {
    return { ...this.items.find(item => item.id === itemId) };
  }

  deleteItem(itemId: string) {
    this.items = this.items.filter(item => item.id !== itemId)
  }
}