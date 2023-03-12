import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPocketsComponent } from './item-pockets.component';

describe('ItemPocketsComponent', () => {
  let component: ItemPocketsComponent;
  let fixture: ComponentFixture<ItemPocketsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPocketsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPocketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
