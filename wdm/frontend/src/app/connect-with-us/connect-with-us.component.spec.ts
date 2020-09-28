import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectWithUsComponent } from './connect-with-us.component';

describe('ConnectWithUsComponent', () => {
  let component: ConnectWithUsComponent;
  let fixture: ComponentFixture<ConnectWithUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectWithUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectWithUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
