import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerEntregasComponent } from './ver-entregas.component';

describe('VerEntregasComponent', () => {
  let component: VerEntregasComponent;
  let fixture: ComponentFixture<VerEntregasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerEntregasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerEntregasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
