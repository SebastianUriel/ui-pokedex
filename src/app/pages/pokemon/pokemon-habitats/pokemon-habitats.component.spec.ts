import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonHabitatsComponent } from './pokemon-habitats.component';

describe('PokemonHabitatsComponent', () => {
  let component: PokemonHabitatsComponent;
  let fixture: ComponentFixture<PokemonHabitatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonHabitatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonHabitatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
