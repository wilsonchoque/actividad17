import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductosComponent } from './productos/productos.component';
import { EditarComponent } from './editar/editar.component';



@NgModule({
  declarations: [
    ProductosComponent,
    EditarComponent
  ],
  imports: [
    CommonModule
  ],exports: [
    ProductosComponent,
    EditarComponent
  ],
})
export class PagesModule { }
