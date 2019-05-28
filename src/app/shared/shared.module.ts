import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ModalModule } from 'ngx-bootstrap';

import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { HttpService } from './http.service';
import { RegisterComponent } from '../modules/auth/register/register.component';

@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule, 
    ModalModule.forRoot(),
  ], exports : [
    MaterialModule,
    ReactiveFormsModule,
    ModalModule,
    RegisterComponent
  ],
  providers : [HttpService]
})
export class SharedModule { }
