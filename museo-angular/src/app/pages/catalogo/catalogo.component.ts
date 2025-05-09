import { Component,  OnInit } from '@angular/core';
import { DataService } from '../../servicios/data.service';
import { Expositor } from '../../common/expositor';

//Para que al clickar en los botones de los articulos redirija a las paginas correspondientes
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent implements OnInit{ 
  constructor( private dataservice: DataService){}

  ngOnInit(): void {
    this.loadArticulos();
  }

  loadArticulos() {
    this.dataservice.getArticulos().subscribe(
      {
        next: (data)=>{
          this.expositor = data;
          console.log(data);
        },
        error: (error)=>{
          console.log(error);
        },
        complete: ()=>{
          console.log('complete');
        }
      }
    )

  }
  expositor! : Expositor;
}
