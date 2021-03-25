import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './comps/header/header.component';
import { ContentComponent } from './comps/content/content.component';
import { FooterComponent } from './comps/footer/footer.component';
import { MainComponent } from './pages/main/main.component';

import { CartComponent } from './comps/cart/cart.component';
import { ProductCartComponent } from './pages/product-cart/product-cart.component';
import { CategoryPageComponent } from './pages/category-page/category-page.component';
import { AboutComponent } from './pages/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MainComponent,
    CartComponent,
    ProductCartComponent,
    CategoryPageComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
