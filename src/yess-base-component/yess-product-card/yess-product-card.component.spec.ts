import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YessProductCardComponent } from './yess-product-card.component';

describe('YessProductCardComponent', () => {
  let component: YessProductCardComponent;
  let fixture: ComponentFixture<YessProductCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YessProductCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YessProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
