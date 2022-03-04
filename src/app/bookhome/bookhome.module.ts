import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookhomePageRoutingModule } from './bookhome-routing.module';

import { BookhomePage } from './bookhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookhomePageRoutingModule
  ],
  declarations: [BookhomePage]
})
export class BookhomePageModule {}
