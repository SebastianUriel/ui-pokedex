import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterConditionsComponent } from './encounter-conditions.component';

describe('EncounterConditionsComponent', () => {
  let component: EncounterConditionsComponent;
  let fixture: ComponentFixture<EncounterConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncounterConditionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
