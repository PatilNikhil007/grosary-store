import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YessDashboardComponent } from './yess-dashboard.component';

describe('YessDashboardComponent', () => {
  let component: YessDashboardComponent;
  let fixture: ComponentFixture<YessDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YessDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YessDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
