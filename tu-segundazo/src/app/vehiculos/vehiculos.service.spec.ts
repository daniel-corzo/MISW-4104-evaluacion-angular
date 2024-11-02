import { TestBed } from '@angular/core/testing';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { VehiculosService } from './vehiculos.service';
import { provideHttpClient } from '@angular/common/http';

describe('VehiculosService', () => {
  let service: VehiculosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        VehiculosService, 
        provideHttpClientTesting(), 
        provideHttpClient()]
    });
    service = TestBed.inject(VehiculosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
