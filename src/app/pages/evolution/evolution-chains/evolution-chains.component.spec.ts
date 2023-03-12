import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionChainsComponent } from './evolution-chains.component';

describe('EvolutionChainsComponent', () => {
  let component: EvolutionChainsComponent;
  let fixture: ComponentFixture<EvolutionChainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvolutionChainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvolutionChainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
