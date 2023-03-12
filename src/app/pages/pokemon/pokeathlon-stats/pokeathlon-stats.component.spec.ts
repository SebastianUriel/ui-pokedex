import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeathlonStatsComponent } from './pokeathlon-stats.component';

describe('PokeathlonStatsComponent', () => {
  let component: PokeathlonStatsComponent;
  let fixture: ComponentFixture<PokeathlonStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeathlonStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokeathlonStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
