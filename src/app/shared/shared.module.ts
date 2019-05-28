import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';
import { HttpService } from './http.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule, 
  ], exports : [
    MaterialModule,
    ReactiveFormsModule,
  ],
  providers : [HttpService]
})
export class SharedModule { }
