import { TestBed } from '@angular/core/testing';

import { ServiceEstudianteService } from './service-estudiante.service';

describe('ServiceEstudianteService', () => {
  let service: ServiceEstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
