import { Component } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.sass']
})
export class ListadoProductosComponent {

  productos :Producto[] =[
    {
      nombre:"Papel higiénico",
      precio: 123
    },
    {
      nombre:"Yerba",
      precio: 500
    },
    {
      nombre:"Galletitas",
      precio: 230
    },
  ]
}
