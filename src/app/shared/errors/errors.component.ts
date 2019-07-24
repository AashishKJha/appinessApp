import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { copyStyles } from '@angular/animations/browser/src/util';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss']
})
export class ErrorsComponent implements OnInit {
  @Input('fg') fg : FormControl
  public err : Array<any>  = [];
  constructor() { }
  ngOnInit() {
    if (this.fg.errors) {
      this.err = Object.keys(this.fg.errors);
    } else {
      this.err = [];
    }

    this.fg.valueChanges.subscribe(val => {
      if(this.fg.errors){
        this.err = Object.keys(this.fg.errors);
      } else {
        this.err = [];
      }
    })
  }
}
