import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './comps/content/content.component';
import { AboutComponent } from './pages/about/about.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { MainComponent } from './pages/main/main.component';
import { ProductCartComponent } from './pages/product-cart/product-cart.component';


const routes: Routes = [
  { path: '', component: ContentComponent, children: [
    { path: '', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: ':id', component: ProductCartComponent },
    { path: 'category/:catId', component: CategoryPageComponent },
    
      {
        path: 'buyer',
        loadChildren: () => import('./buyer/buyer.module').then(m => m.BuyerModule)
      }
    ]
  }  
  
]


@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
