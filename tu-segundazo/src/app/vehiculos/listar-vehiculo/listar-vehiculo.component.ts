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
  conteoMarcas: { marca: string, total: number }[] = [];

  ngOnInit(): void {
    this.vehiculosService.getVehiculos()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(vehiculos => {
        this.vehiculos = vehiculos;

        this.vehiculos.forEach(vehiculo => {
          const marca = vehiculo.marca;
          const marcaEncontrada = this.conteoMarcas.find(m => m.marca === marca);

          if (marcaEncontrada) {
            marcaEncontrada.total++;
          } else {
            this.conteoMarcas.push({ marca, total: 1 });
          }
        });
      });
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
