import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  cartItems = [];

  ngOnInit() {
    console.log(this.cartItems)
  }

  shopRedirect() {
    this.activatedRoute.paramMap.subscribe(paraMap => {
      this.router.navigate(["items"]);
      return;
    }
    )
  }
}