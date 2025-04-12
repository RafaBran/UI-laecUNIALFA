import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreinoAoBebedouroComponent } from './treino-ao-bebedouro.component';

describe('TreinoAoBebedouroComponent', () => {
  let component: TreinoAoBebedouroComponent;
  let fixture: ComponentFixture<TreinoAoBebedouroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TreinoAoBebedouroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TreinoAoBebedouroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
