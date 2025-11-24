import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products';
import { FeedbackComponent } from './feedback/feedback';

export const routes: Routes = [
  { path: '', component: ProductsComponent },
  { path: 'feedback', component: FeedbackComponent }
];
