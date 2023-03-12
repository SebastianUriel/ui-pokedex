import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonLocationAreasComponent } from './pokemon-location-areas.component';

describe('PokemonLocationAreasComponent', () => {
  let component: PokemonLocationAreasComponent;
  let fixture: ComponentFixture<PokemonLocationAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonLocationAreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonLocationAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
