import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListarVehiculoComponent } from "./vehiculos/listar-vehiculo/listar-vehiculo.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListarVehiculoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'tu-segundazo';
}
