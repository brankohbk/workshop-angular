import { Component } from '@angular/core';
import { Producto } from '../interfaces/producto.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})


export class MainPageComponent {

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

  nuevoProducto :Producto = {
    nombre: "Gaseosa",
    precio: 130
  }

  agregar(){
    this.productos.push(this.nuevoProducto)
    this.nuevoProducto = {
      nombre:"",
      precio:0
    }
  }
  
}
