import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.scss']
})
export class FormCompComponent implements OnInit {
  name = new FormControl('');
  constructor() { }

  ngOnInit(): void {
  }
  chageVal()
  {
    console.log(this.name.value)
  }
  
}
