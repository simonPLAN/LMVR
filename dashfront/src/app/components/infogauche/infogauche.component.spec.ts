import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfogaucheComponent } from './infogauche.component';

describe('InfogaucheComponent', () => {
  let component: InfogaucheComponent;
  let fixture: ComponentFixture<InfogaucheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfogaucheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfogaucheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
