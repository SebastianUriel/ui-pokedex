import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveBattleStylesComponent } from './move-battle-styles.component';

describe('MoveBattleStylesComponent', () => {
  let component: MoveBattleStylesComponent;
  let fixture: ComponentFixture<MoveBattleStylesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveBattleStylesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveBattleStylesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
