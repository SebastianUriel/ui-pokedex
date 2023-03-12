import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveDamageClassesComponent } from './move-damage-classes.component';

describe('MoveDamageClassesComponent', () => {
  let component: MoveDamageClassesComponent;
  let fixture: ComponentFixture<MoveDamageClassesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveDamageClassesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveDamageClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
