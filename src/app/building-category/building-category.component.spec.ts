import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildingCategoryComponent } from './building-category.component';

describe('BuildingCategoryComponent', () => {
  let component: BuildingCategoryComponent;
  let fixture: ComponentFixture<BuildingCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuildingCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuildingCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
