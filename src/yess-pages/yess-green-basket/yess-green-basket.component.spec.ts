import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YessGreenBasketComponent } from './yess-green-basket.component';

describe('YessGreenBasketComponent', () => {
  let component: YessGreenBasketComponent;
  let fixture: ComponentFixture<YessGreenBasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YessGreenBasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YessGreenBasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
