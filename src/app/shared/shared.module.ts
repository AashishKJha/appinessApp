import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule } from '../../../node_modules/@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule, 
  ], exports : [
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
