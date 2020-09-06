import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YessAddToCartComponent } from './yess-add-to-cart.component';

describe('YessAddToCartComponent', () => {
  let component: YessAddToCartComponent;
  let fixture: ComponentFixture<YessAddToCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YessAddToCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YessAddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
