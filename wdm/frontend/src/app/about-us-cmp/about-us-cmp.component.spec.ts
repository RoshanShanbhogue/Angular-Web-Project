import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUsCmpComponent } from './about-us-cmp.component';

describe('AboutUsCmpComponent', () => {
  let component: AboutUsCmpComponent;
  let fixture: ComponentFixture<AboutUsCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUsCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUsCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
