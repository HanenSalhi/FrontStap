import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatAVSComponent } from './stat-avs.component';

describe('StatAVSComponent', () => {
  let component: StatAVSComponent;
  let fixture: ComponentFixture<StatAVSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatAVSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatAVSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
