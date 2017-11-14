import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserComponent } from './user/user.component';
import { MissingBestSellersComponent } from './missing-best-sellers/missing-best-sellers.component';
import { TitleCasePipe } from './title-case.pipe';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerHeaderComponent } from './customer-header/customer-header.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { UserService } from './user.service';
import { CustomerSalesNumbersComponent } from './customer-sales-numbers/customer-sales-numbers.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerDetailsComponent,
    ProductsComponent,
    ProductDetailsComponent,
    UserComponent,
    MissingBestSellersComponent,
    TitleCasePipe,
    CustomerHomeComponent,
    CustomerHeaderComponent,
    UserHeaderComponent,
    CustomerSalesNumbersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
