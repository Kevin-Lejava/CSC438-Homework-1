import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item.interface';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  cart: Item[] = [{
    id: '2',
    name: 'Oranges',
    imageUrl: 'https://cdn.britannica.com/24/174524-050-A851D3F2/Oranges.jpg',
    description: 'Bunches of seedless grapes.'
  }];

  ngOnInit() {
    this.cart = this.cart
    console.log(this.cart)
  }

  shopRedirect() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      this.router.navigate(["items"]);
      return;
    }
    )
  }

  checkoutRedirect() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      this.router.navigate(["checkout"]);
      return;
    }
    )
  }
}