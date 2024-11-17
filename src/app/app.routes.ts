import { Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CreateProductComponent } from './create-product/create-product.component';

export const routes: Routes = [
    { path: '', component: WelcomeComponent},
    { path: 'product', component: ProductComponent},
    { path: 'create-product', component: CreateProductComponent}
];
