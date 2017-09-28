import { Component } from '@angular/core';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public shoppingCart = ['first product', 'second product', 'third product', 'forth product'];
  public cartItems = [];


  title = 'app in progress';
    selectedCartItem(cartItem) {
        if ( this.cartItems.indexOf(cartItem) === -1 ) {
            this.cartItems.push(cartItem);
        }
    }
}
