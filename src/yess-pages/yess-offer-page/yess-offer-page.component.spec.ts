import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YessOfferPageComponent } from './yess-offer-page.component';

describe('YessOfferPageComponent', () => {
  let component: YessOfferPageComponent;
  let fixture: ComponentFixture<YessOfferPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YessOfferPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YessOfferPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
