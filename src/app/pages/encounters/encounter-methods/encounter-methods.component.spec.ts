import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncounterMethodsComponent } from './encounter-methods.component';

describe('EncounterMethodsComponent', () => {
  let component: EncounterMethodsComponent;
  let fixture: ComponentFixture<EncounterMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EncounterMethodsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncounterMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
