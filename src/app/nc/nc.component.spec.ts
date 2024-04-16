import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NCComponent } from './nc.component';

describe('NCComponent', () => {
  let component: NCComponent;
  let fixture: ComponentFixture<NCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
