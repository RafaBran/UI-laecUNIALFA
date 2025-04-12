import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerimetralNoturnoComponent } from './perimetral-noturno.component';

describe('PerimetralNoturnoComponent', () => {
  let component: PerimetralNoturnoComponent;
  let fixture: ComponentFixture<PerimetralNoturnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerimetralNoturnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerimetralNoturnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
