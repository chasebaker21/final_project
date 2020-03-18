import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BpCategoryListComponent } from './bp-category-list.component';

describe('BpCategoryListComponent', () => {
  let component: BpCategoryListComponent;
  let fixture: ComponentFixture<BpCategoryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BpCategoryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BpCategoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
