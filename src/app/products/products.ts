import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // <-- importer ici

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule], // <-- ajouter ici
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent {
  products = [
    { name: 'Maïs', price: 100 },
    { name: 'Riz', price: 200 },
    { name: 'Tomates', price: 150 }
  ];
}
