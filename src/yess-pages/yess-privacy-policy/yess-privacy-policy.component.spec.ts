import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YessPrivacyPolicyComponent } from './yess-privacy-policy.component';

describe('YessPrivacyPolicyComponent', () => {
  let component: YessPrivacyPolicyComponent;
  let fixture: ComponentFixture<YessPrivacyPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YessPrivacyPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YessPrivacyPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
