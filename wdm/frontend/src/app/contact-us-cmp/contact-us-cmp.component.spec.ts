import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsCmpComponent } from './contact-us-cmp.component';

describe('ContactUsCmpComponent', () => {
  let component: ContactUsCmpComponent;
  let fixture: ComponentFixture<ContactUsCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
