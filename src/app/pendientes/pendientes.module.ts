import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';



@NgModule({
  declarations: [
    MainPageComponent,
    AgregarProductoComponent,
    ListadoProductosComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    MainPageComponent,
    AgregarProductoComponent,
    ListadoProductosComponent
  ]
})
export class PendientesModule { }
