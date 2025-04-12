import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuenoMetutinoComponent } from './bueno-metutino.component';

describe('BuenoMetutinoComponent', () => {
  let component: BuenoMetutinoComponent;
  let fixture: ComponentFixture<BuenoMetutinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuenoMetutinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuenoMetutinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
