import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BerryFirmnessesComponent } from './berry-firmnesses.component';

describe('BerryFirmnessesComponent', () => {
  let component: BerryFirmnessesComponent;
  let fixture: ComponentFixture<BerryFirmnessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BerryFirmnessesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BerryFirmnessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
