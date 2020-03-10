import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MjCategoryComponent } from './mj-category.component';

describe('MjCategoryComponent', () => {
  let component: MjCategoryComponent;
  let fixture: ComponentFixture<MjCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MjCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MjCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
