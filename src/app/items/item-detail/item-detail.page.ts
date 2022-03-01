import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../items.service';
import { Item } from '../item.interface';
import { AlertController } from '@ionic/angular';
import { CartPage } from 'src/app/items/cart/cart.page';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.page.html',
  styleUrls: ['./item-detail.page.scss'],
})
export class ItemDetailPage implements OnInit {

  loadedItem: Item;

  constructor(private activatedRoute: ActivatedRoute, private itemService: ItemsService, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      if (!paraMap.has('itemId')) {
        this.router.navigate([".items"]);
        return;
      }
      const itemId = paraMap.get('itemId');
      this.loadedItem = this.itemService.getItem(itemId);
    });
  }

  // addToCart() {
  //   this.cartPage.cartItems.push(this.loadedItem);
  //   this.router.navigate([".cart"]);
  // }

  addToCart() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      this.router.navigate(["../items/cart"]);
      return;
    }
    )
  }

}
