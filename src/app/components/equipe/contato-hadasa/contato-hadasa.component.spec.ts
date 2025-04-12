import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoHadasaComponent } from './contato-hadasa.component';

describe('ContatoHadasaComponent', () => {
  let component: ContatoHadasaComponent;
  let fixture: ComponentFixture<ContatoHadasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoHadasaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoHadasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
