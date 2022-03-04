import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginresultPageRoutingModule } from './loginresult-routing.module';

import { LoginresultPage } from './loginresult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginresultPageRoutingModule
  ],
  declarations: [LoginresultPage]
})
export class LoginresultPageModule {}
