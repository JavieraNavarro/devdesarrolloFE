import { TestBed } from '@angular/core/testing';

import { ObtenerFelicitacionService } from './obtener-felicitacion.service';

describe('ObtenerFelicitacionService', () => {
  let service: ObtenerFelicitacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObtenerFelicitacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
