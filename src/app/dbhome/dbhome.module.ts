import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DbhomePageRoutingModule } from './dbhome-routing.module';

import { DbhomePage } from './dbhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DbhomePageRoutingModule
  ],
  declarations: [DbhomePage]
})
export class DbhomePageModule {}
