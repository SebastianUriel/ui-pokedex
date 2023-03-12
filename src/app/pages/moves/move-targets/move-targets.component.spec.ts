import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveTargetsComponent } from './move-targets.component';

describe('MoveTargetsComponent', () => {
  let component: MoveTargetsComponent;
  let fixture: ComponentFixture<MoveTargetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveTargetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveTargetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
