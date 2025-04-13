import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoMilenaComponent } from './contato-milena.component';

describe('ContatoMilenaComponent', () => {
  let component: ContatoMilenaComponent;
  let fixture: ComponentFixture<ContatoMilenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoMilenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoMilenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
