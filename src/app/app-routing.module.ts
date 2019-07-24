import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

/**
 * Commenting to test something.
 */

 /**
  * Tesing Something else
  */
const routes: Routes = [
    { path: '', redirectTo: 'auth', pathMatch: 'full' },
    { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
    { path: 'user', loadChildren: './modules/user/user.module#UserModule', canActivate : [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
