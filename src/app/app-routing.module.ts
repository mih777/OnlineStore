import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './comps/content/content.component';
import { MainComponent } from './pages/main/main.component';
import { ProductCartComponent } from './pages/product-cart/product-cart.component';


const routes: Routes = [
  { path: '', component: ContentComponent, children: [
    { path: '', component: MainComponent },
    { path: ':id', component: ProductCartComponent }
  ]}
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
