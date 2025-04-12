import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoKatarineComponent } from './contato-katarine.component';

describe('ContatoKatarineComponent', () => {
  let component: ContatoKatarineComponent;
  let fixture: ComponentFixture<ContatoKatarineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatoKatarineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContatoKatarineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
