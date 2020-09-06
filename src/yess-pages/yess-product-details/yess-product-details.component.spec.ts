import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YessProductDetailsComponent } from './yess-product-details.component';

describe('YessProductDetailsComponent', () => {
  let component: YessProductDetailsComponent;
  let fixture: ComponentFixture<YessProductDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YessProductDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YessProductDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
