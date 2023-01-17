import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos = [
    {
      "id":1,
      "codigo":1,
      "descripcion":"Galletas chokis",
      "p_compra":10,
      "p_venta":15,
      "existencia":100
    }
  ]

  constructor(private router:Router, private route:ActivatedRoute, private productoService: ServiceService) { }

  editar(id: number) {
    this.router.navigate(['/editar', id])
  }
  ngOnInit(): void {
    this.productos = this.productoService.productos
  }


}
