import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './create-product.component.html',
})
export class CreateProductComponent {
  handleClick () {
    console.log('Button Clicked!');
    alert("Hello world")
  }
}
