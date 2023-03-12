import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonShapesComponent } from './pokemon-shapes.component';

describe('PokemonShapesComponent', () => {
  let component: PokemonShapesComponent;
  let fixture: ComponentFixture<PokemonShapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonShapesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonShapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
