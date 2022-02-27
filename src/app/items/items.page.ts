import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from './item.interface';
import { ItemsService } from './items.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  items: Item[]

  constructor(private itemsService: ItemsService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.items = this.itemsService.getAllItems();
  }

  cartRedirect() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      this.router.navigate(["items/cart"]);
      return;
    }
    )
  }
}
