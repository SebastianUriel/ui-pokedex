import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowthRatesComponent } from './growth-rates.component';

describe('GrowthRatesComponent', () => {
  let component: GrowthRatesComponent;
  let fixture: ComponentFixture<GrowthRatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrowthRatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrowthRatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
