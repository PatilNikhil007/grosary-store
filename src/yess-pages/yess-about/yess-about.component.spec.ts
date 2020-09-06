import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YessAboutComponent } from './yess-about.component';

describe('YessAboutComponent', () => {
  let component: YessAboutComponent;
  let fixture: ComponentFixture<YessAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YessAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YessAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
