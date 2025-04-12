import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoAmandaComponent } from './contato-amanda.component';

describe('ContatoAmandaComponent', () => {
  let component: ContatoAmandaComponent;
  let fixture: ComponentFixture<ContatoAmandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoAmandaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoAmandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
