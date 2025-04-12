import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuenoNoturnoComponent } from './bueno-noturno.component';

describe('BuenoNoturnoComponent', () => {
  let component: BuenoNoturnoComponent;
  let fixture: ComponentFixture<BuenoNoturnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuenoNoturnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuenoNoturnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
