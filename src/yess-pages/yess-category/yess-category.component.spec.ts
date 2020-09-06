import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YessCategoryComponent } from './yess-category.component';

describe('YessCategoryComponent', () => {
  let component: YessCategoryComponent;
  let fixture: ComponentFixture<YessCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YessCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YessCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
