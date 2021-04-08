import { ComponentFixture, TestBed } from '@angular/core/testing';

import { covidComponent } from './covid.component';

describe('covidComponent', () => {
  let component: covidComponent;
  let fixture: ComponentFixture<covidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ covidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(covidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
