import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterConditionValuesComponent } from './encounter-condition-values.component';

describe('EncounterConditionValuesComponent', () => {
  let component: EncounterConditionValuesComponent;
  let fixture: ComponentFixture<EncounterConditionValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncounterConditionValuesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterConditionValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
