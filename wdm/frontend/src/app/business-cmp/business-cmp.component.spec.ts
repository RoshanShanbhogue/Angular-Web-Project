import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCmpComponent } from './business-cmp.component';

describe('BusinessCmpComponent', () => {
  let component: BusinessCmpComponent;
  let fixture: ComponentFixture<BusinessCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
