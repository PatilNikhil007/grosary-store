import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YessCheckoutComponent } from './yess-checkout.component';

describe('YessCheckoutComponent', () => {
  let component: YessCheckoutComponent;
  let fixture: ComponentFixture<YessCheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YessCheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YessCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
