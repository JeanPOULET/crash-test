import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ProductDetailsComponent} from './features/products/product-details/product-details.component';

@Component({
  selector: 'app-root',
  imports: [ProductDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'front-crash-test';
}
