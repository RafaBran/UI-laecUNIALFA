import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoProfessorComponent } from './contato-professor.component';

describe('ContatoProfessorComponent', () => {
  let component: ContatoProfessorComponent;
  let fixture: ComponentFixture<ContatoProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoProfessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
