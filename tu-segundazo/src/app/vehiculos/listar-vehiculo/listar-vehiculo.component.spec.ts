import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVehiculoComponent } from './listar-vehiculo.component';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Vehiculo } from '../vehiculo.model';
import { VehiculosService } from '../vehiculos.service';
import { of } from 'rxjs';

describe('ListarVehiculoComponent', () => {
  let component: ListarVehiculoComponent;
  let fixture: ComponentFixture<ListarVehiculoComponent>;
  let vehiculosService: VehiculosService;
  let mockVehiculos: Vehiculo[];

  beforeEach(async () => {
    mockVehiculos = [
      { id: 1, marca: 'Renault', linea: 'Kangoo', referencia: 'VU Express', modelo: 2017, kilometraje: 93272, color: 'Blanco', imagen: 'https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg' },
      { id: 2, marca: 'Chevrolet', linea: 'Spark', referencia: 'Life', modelo: 2018, kilometraje: 55926, color: 'Plata', imagen: 'https://turistran.com/2-thickbox_default/chevrolet-spark-life.jpg' },
      { id: 3, marca: 'Chevrolet', linea: 'Sail', referencia: 'LT Sedan', modelo: 2016, kilometraje: 94321, color: 'Rojo', imagen: 'https://www.chevrolet.com.ec/content/dam/chevrolet/south-america/ecuador/espanol/index/cars/2019-sail/mov/01-images/2018-chevrolet-sail-rojo-01.png' }
    ];

    await TestBed.configureTestingModule({
      imports: [ListarVehiculoComponent],
      providers: [
        VehiculosService,
        provideHttpClientTesting(),
        {
          provide: HttpClient,
          useValue: {
            get: () => of(mockVehiculos)
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ListarVehiculoComponent);
    component = fixture.componentInstance;
    vehiculosService = TestBed.inject(VehiculosService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a table with 3 rows', async () => {
    fixture.detectChanges();
    expect(component.vehiculos).toEqual(mockVehiculos);
    
    const compiled = fixture.nativeElement;
    const rows = compiled.querySelectorAll('tbody tr');
    expect(rows.length).toBe(3);
  });
});
