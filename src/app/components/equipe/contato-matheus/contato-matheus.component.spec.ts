import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoMatheusComponent } from './contato-matheus.component';

describe('ContatoMatheusComponent', () => {
  let component: ContatoMatheusComponent;
  let fixture: ComponentFixture<ContatoMatheusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoMatheusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoMatheusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
