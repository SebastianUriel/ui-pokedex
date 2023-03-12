import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemFlingEffectsComponent } from './item-fling-effects.component';

describe('ItemFlingEffectsComponent', () => {
  let component: ItemFlingEffectsComponent;
  let fixture: ComponentFixture<ItemFlingEffectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemFlingEffectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemFlingEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
