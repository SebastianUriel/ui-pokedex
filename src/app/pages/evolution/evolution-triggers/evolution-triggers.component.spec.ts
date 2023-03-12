import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionTriggersComponent } from './evolution-triggers.component';

describe('EvolutionTriggersComponent', () => {
  let component: EvolutionTriggersComponent;
  let fixture: ComponentFixture<EvolutionTriggersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolutionTriggersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvolutionTriggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
