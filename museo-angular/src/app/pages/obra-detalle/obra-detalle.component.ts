import { Component, OnInit } from '@angular/core';
import { DataService } from '../../servicios/data.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import {articulo, Expositor} from "../../common/expositor";

@Component({
  selector: 'app-obra-detalle',
  imports: [RouterLink],
  templateUrl: './obra-detalle.component.html',
  styleUrl: './obra-detalle.component.css'
})
export class ObraDetalleComponent implements OnInit{

  constructor(
    private dataservice: DataService,
    private activerouted: ActivatedRoute,
    private route: ActivatedRoute
  ){}
  ArticuloONE? : articulo;

  ngOnInit(): void {
    this.loadArticuloONE();
  }

  loadArticuloONE(){
    const id = this.activerouted.snapshot.params['id'];

    this.dataservice.getArticuloById(id).subscribe(
      {
        next: (data)=>{
          this.ArticuloONE = data;
          console.log(this.ArticuloONE);
        },
        error: (error)=>{
          console.log('No se pudo encontrar el articulo con el id por' + error);
        },
        complete: ()=>{
          console.log('el proceso de adquirir el articulo se ha completado correctamente')
        }
      }
    )
  }

}
