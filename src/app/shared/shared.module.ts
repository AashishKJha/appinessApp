import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ModalModule } from 'ngx-bootstrap';

import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { HttpService } from './http.service';
import { RegisterComponent } from '../modules/auth/register/register.component';
import { UserDetailsComponent } from '../modules/user/user-details/user-details.component';

@NgModule({
  declarations: [RegisterComponent, UserDetailsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule, 
    ModalModule.forRoot(),
  ], exports : [
    MaterialModule,
    ReactiveFormsModule,
    ModalModule,
    RegisterComponent,
    UserDetailsComponent
  ],
  providers : [HttpService]
})
export class SharedModule { }
