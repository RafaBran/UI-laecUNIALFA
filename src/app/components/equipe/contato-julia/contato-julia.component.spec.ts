import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoJuliaComponent } from './contato-julia.component';

describe('ContatoJuliaComponent', () => {
  let component: ContatoJuliaComponent;
  let fixture: ComponentFixture<ContatoJuliaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoJuliaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoJuliaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
