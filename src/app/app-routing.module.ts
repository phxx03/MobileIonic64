import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'dbhome',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'loginresult/:dataobj',
    loadChildren: () => import('./loginresult/loginresult.module').then( m => m.LoginresultPageModule)
  },
  {
    path: 'avatarpg',
    loadChildren: () => import('./avatarpg/avatarpg.module').then( m => m.AvatarpgPageModule)
  },
  {
    path: 'dbhome',
    loadChildren: () => import('./dbhome/dbhome.module').then( m => m.DbhomePageModule)
  },
  {
    path: 'bookhome/:id',
    loadChildren: () => import('./bookhome/bookhome.module').then( m => m.BookhomePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
