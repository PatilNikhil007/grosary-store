import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YessTermsAndConditionsPageComponent } from './yess-terms-and-conditions-page.component';

describe('YessTermsAndConditionsPageComponent', () => {
  let component: YessTermsAndConditionsPageComponent;
  let fixture: ComponentFixture<YessTermsAndConditionsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YessTermsAndConditionsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YessTermsAndConditionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
