import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestEffectsComponent } from './contest-effects.component';

describe('ContestEffectsComponent', () => {
  let component: ContestEffectsComponent;
  let fixture: ComponentFixture<ContestEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContestEffectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContestEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
