import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YessBlogPageComponent } from './yess-blog-page.component';

describe('YessBlogPageComponent', () => {
  let component: YessBlogPageComponent;
  let fixture: ComponentFixture<YessBlogPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YessBlogPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YessBlogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
