import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YessContactComponent } from './yess-contact.component';

describe('YessContactComponent', () => {
  let component: YessContactComponent;
  let fixture: ComponentFixture<YessContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YessContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YessContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
