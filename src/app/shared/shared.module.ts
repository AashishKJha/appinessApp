import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ModalModule } from 'ngx-bootstrap';

import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { HttpService } from './http.service';
import { RegisterComponent } from '../modules/auth/register/register.component';
import { UserDetailsComponent } from '../modules/user/user-details/user-details.component';
import { ErrorsComponent } from './errors/errors.component';

@NgModule({
  declarations: [RegisterComponent, UserDetailsComponent, ErrorsComponent],
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
    UserDetailsComponent,
    ErrorsComponent
  ],
  providers : [HttpService]
})
export class SharedModule { }
