import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DbhomePageRoutingModule } from './dbhome-routing.module';

import { DbhomePage } from './dbhome.page';
import { HomePageRoutingModule } from '../home/home-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DbhomePageRoutingModule,
    HomePageRoutingModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
  ],
  declarations: [DbhomePage]
})
export class DbhomePageModule {}
