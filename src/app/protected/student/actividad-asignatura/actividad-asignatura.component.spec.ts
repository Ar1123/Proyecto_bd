import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActividadAsignaturaComponent } from './actividad-asignatura.component';

describe('ActividadAsignaturaComponent', () => {
  let component: ActividadAsignaturaComponent;
  let fixture: ComponentFixture<ActividadAsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActividadAsignaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActividadAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
