import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/services/service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit{

  id!:string | null;
  idConvert!:number;
  ProductoLLamado:any[]=[];

  constructor(private router:Router, private route:ActivatedRoute, private productoService: ServiceService ) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id!==null){
      this.idConvert=parseInt(this.id)
    }

      this.ProductoLLamado=this.productoService.productos.filter(
      x=>{
        return x.id==this.idConvert
      }
      )
    }
  editar(id:string, codigo:string, descripcion:string, comprar:string, venta:string, existencia:string){
    let idC=parseInt(id);
    let codigoC=parseInt(codigo);
    let comprarC=parseInt(comprar);
    let ventaC=parseInt(venta);
    let existenciaC=parseInt(existencia)
    this.productoService.actualizar(idC,codigoC,descripcion,comprarC,ventaC,existenciaC)
    this.router.navigate(['/'])
  }
  cancelar(){
    this.router.navigate(['/'])
  }
}
