import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OneShopPage } from './one-shop.page';

const routes: Routes = [
  {
    path: '',
    component: OneShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OneShopPageRoutingModule {}
