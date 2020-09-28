import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAccordianCmpComponent } from './service-accordian-cmp.component';

describe('ServiceAccordianCmpComponent', () => {
  let component: ServiceAccordianCmpComponent;
  let fixture: ComponentFixture<ServiceAccordianCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceAccordianCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAccordianCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
