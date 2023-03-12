import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonColorsComponent } from './pokemon-colors.component';

describe('PokemonColorsComponent', () => {
  let component: PokemonColorsComponent;
  let fixture: ComponentFixture<PokemonColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonColorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
