import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoveAilmentsComponent } from './move-ailments.component';

describe('MoveAilmentsComponent', () => {
  let component: MoveAilmentsComponent;
  let fixture: ComponentFixture<MoveAilmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoveAilmentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoveAilmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
