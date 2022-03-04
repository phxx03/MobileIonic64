import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookhomePage } from './bookhome.page';

const routes: Routes = [
  {
    path: '',
    component: BookhomePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookhomePageRoutingModule {}
