import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LesCartesComponent } from './les-cartes.component';

describe('LesCartesComponent', () => {
  let component: LesCartesComponent;
  let fixture: ComponentFixture<LesCartesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LesCartesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LesCartesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
