import { ModuleWithProviders, Input }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { UserComponent } from './user/user.component';
import { MissingBestSellersComponent } from './missing-best-sellers/missing-best-sellers.component';

const appRoutes: Routes = [
  {
    path: '',
    component: UserComponent,
  },
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'customers',
    component: CustomersComponent,
  },
  {
    path: 'customers/:id',
    component: CustomerDetailsComponent,
  },
  {
    path: 'customers/:id/missing-best-sellers',
    component: MissingBestSellersComponent,
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
