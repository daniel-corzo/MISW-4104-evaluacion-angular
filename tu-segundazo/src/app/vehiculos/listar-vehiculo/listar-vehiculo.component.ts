import { Component, OnDestroy, OnInit } from '@angular/core';
import { VehiculosService } from '../vehiculos.service';
import { Vehiculo } from '../vehiculo.model';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-listar-vehiculo',
  standalone: true,
  providers: [VehiculosService],
  templateUrl: './listar-vehiculo.component.html',
  styleUrl: './listar-vehiculo.component.less'
})
export class ListarVehiculoComponent implements OnInit, OnDestroy {
  constructor(private vehiculosService: VehiculosService) { }

  vehiculos: Vehiculo[] = [];
  unsubscribe$ = new Subject<void>();

  ngOnInit(): void {
    this.vehiculosService.getVehiculos()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(vehiculos => {
        this.vehiculos = vehiculos;
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
