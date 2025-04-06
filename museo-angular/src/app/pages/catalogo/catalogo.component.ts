import { Component,  OnInit } from '@angular/core';
import { DataService } from '../../servicios/data.service';
import { Expositor } from '../../common/expositor';

@Component({
  selector: 'app-catalogo',
  imports: [],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {
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
