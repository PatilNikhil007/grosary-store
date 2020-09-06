import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YessFaqComponent } from './yess-faq.component';

describe('YessFaqComponent', () => {
  let component: YessFaqComponent;
  let fixture: ComponentFixture<YessFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YessFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YessFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
