import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  productos=[
    {
      "id":1,
      "codigo":1,
      "descripcion":"Galletas chokis",
      "p_compra":10,
      "p_venta":15,
      "existencia":100
    },
    {
      "id":2,
      "codigo":2,
      "descripcion":"Mermelada de fresa",
      "p_compra":65,
      "p_venta":80,
      "existencia":100
    },
    {
      "id":3,
      "codigo":3,
      "descripcion":"Aceite",
      "p_compra":18,
      "p_venta":20,
      "existencia":100
    },
    {
      "id":4,
      "codigo":4,
      "descripcion":"Palomitas de maiz",
      "p_compra":12,
      "p_venta":15,
      "existencia":100
    },
    {
      "id":5,
      "codigo":5,
      "descripcion":"Doritos",
      "p_compra":5,
      "p_venta":8,
      "existencia":100
    }
  ]

  actualizar(id: number, cod: number, descr: string, compra: number, venta: number, stock: number) {
    let selecto = this.productos.filter((x) => { return x.id == id })
    let index = this.productos.indexOf(selecto[0])
    this.productos[index].codigo = cod;
    this.productos[index].descripcion = descr;
    this.productos[index].p_compra = compra;
    this.productos[index].p_venta = venta;
    this.productos[index].existencia = stock;
  }

  
  constructor() { }


}
