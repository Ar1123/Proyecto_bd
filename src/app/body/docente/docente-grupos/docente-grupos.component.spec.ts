import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteGruposComponent } from './docente-grupos.component';

describe('DocenteGruposComponent', () => {
  let component: DocenteGruposComponent;
  let fixture: ComponentFixture<DocenteGruposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocenteGruposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteGruposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
