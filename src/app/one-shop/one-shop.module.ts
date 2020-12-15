import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OneShopPageRoutingModule } from './one-shop-routing.module';

import { OneShopPage } from './one-shop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OneShopPageRoutingModule
  ],
  declarations: [OneShopPage]
})
export class OneShopPageModule {}
