import { Component, OnInit } from '@angular/core';
import { Item } from './item.interface';
import { ItemsService } from './items.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  items: Item[]

  constructor(private itemsService: ItemsService) { }

  ngOnInit() {
    this.items = this.itemsService.getAllItems();
  }

}
