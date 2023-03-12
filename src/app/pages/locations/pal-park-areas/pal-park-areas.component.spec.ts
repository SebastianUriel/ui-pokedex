import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PalParkAreasComponent } from './pal-park-areas.component';

describe('PalParkAreasComponent', () => {
  let component: PalParkAreasComponent;
  let fixture: ComponentFixture<PalParkAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PalParkAreasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PalParkAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
