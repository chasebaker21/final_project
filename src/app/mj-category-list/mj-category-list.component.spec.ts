import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MjCategoryListComponent } from './mj-category-list.component';

describe('MjCategoryListComponent', () => {
  let component: MjCategoryListComponent;
  let fixture: ComponentFixture<MjCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MjCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MjCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
