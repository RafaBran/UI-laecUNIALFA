import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhaDeBaseComponent } from './linha-de-base.component';

describe('LinhaDeBaseComponent', () => {
  let component: LinhaDeBaseComponent;
  let fixture: ComponentFixture<LinhaDeBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinhaDeBaseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinhaDeBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
