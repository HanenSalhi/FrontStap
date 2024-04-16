import { ComponentFixture, TestBed } from '@angular/core/testing';

import {StatsBBS} from './stats.component';

describe('StatsComponent', () => {
  let component: StatsBBS;
  let fixture: ComponentFixture<StatsBBS>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatsBBS]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatsBBS);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
