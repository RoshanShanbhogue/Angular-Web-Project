import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCmpComponent } from './service-cmp.component';

describe('ServiceCmpComponent', () => {
  let component: ServiceCmpComponent;
  let fixture: ComponentFixture<ServiceCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
