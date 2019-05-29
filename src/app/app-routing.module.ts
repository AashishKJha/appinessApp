import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'user', pathMatch: 'full' },
    { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule' },
    { path: 'user', loadChildren: './modules/user/user.module#UserModule', canActivate : [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
