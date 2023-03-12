import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperContestEffectsComponent } from './super-contest-effects.component';

describe('SuperContestEffectsComponent', () => {
  let component: SuperContestEffectsComponent;
  let fixture: ComponentFixture<SuperContestEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuperContestEffectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuperContestEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
