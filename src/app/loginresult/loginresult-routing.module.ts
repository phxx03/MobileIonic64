import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginresultPage } from './loginresult.page';

const routes: Routes = [
  {
    path: '',
    component: LoginresultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginresultPageRoutingModule {}
