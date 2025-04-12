import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoTecnicoComponent } from './contato-tecnico.component';

describe('ContatoTecnicoComponent', () => {
  let component: ContatoTecnicoComponent;
  let fixture: ComponentFixture<ContatoTecnicoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoTecnicoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoTecnicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
