import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooknowComponent } from './booknow/booknow.component';
import { CmsConfig, ConfigModule } from "@spartacus/core";
import {AddToWishListModule} from "@spartacus/cart/wish-list/components/add-to-wishlist";



@NgModule({
  declarations: [
    BooknowComponent
  ],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents: {
        AddToWishListComponent: {
          component: BooknowComponent
        }
      }
    } as CmsConfig),
    AddToWishListModule
  ]
})
export class BooxiModule { }
