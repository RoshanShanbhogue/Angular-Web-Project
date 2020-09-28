import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCmpComponent } from './banner-cmp.component';

describe('BannerCmpComponent', () => {
  let component: BannerCmpComponent;
  let fixture: ComponentFixture<BannerCmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerCmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerCmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
