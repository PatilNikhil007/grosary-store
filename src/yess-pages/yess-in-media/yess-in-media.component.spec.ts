import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YessInMediaComponent } from './yess-in-media.component';

describe('YessInMediaComponent', () => {
  let component: YessInMediaComponent;
  let fixture: ComponentFixture<YessInMediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YessInMediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YessInMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
