import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveCategoriesComponent } from './move-categories.component';

describe('MoveCategoriesComponent', () => {
  let component: MoveCategoriesComponent;
  let fixture: ComponentFixture<MoveCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveCategoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
