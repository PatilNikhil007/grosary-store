import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YessCustomerSpeakComponent } from './yess-customer-speak.component';

describe('YessCustomerSpeakComponent', () => {
  let component: YessCustomerSpeakComponent;
  let fixture: ComponentFixture<YessCustomerSpeakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YessCustomerSpeakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YessCustomerSpeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
