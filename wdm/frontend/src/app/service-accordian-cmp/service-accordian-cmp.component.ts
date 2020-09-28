import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-service-accordian-cmp',
  templateUrl: './service-accordian-cmp.component.html',
  styleUrls: ['./service-accordian-cmp.component.css']
})
export class ServiceAccordianCmpComponent implements OnInit {

  selectedPanel = 'Section1';
  
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      address: ['', Validators.required]
    });
  }

  myFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

}
