import { Component,  OnInit } from '@angular/core';
import { DataService } from '../../servicios/data.service';
import { dataExposicion } from '../../common/dataExposicion';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{
  constructor( private dataservice: DataService){}

    ngOnInit(): void {
      this.loadExposiciones();
    }
  
    loadExposiciones() {
      this.dataservice.getExposiciones().subscribe(
        {
          next: (data)=>{
            this.dataExposiciones = data;
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
    dataExposiciones! : dataExposicion;

    expoIndex= 0; //Como lo que recibe es una lista del json, desde aquí controlamos el elemento elegido en lugar de desde el html
    getIndex(){
      /*
      setInterval(() =>{
        if(this.expoIndex==0) this.expoIndex=1;
        if(this.expoIndex==1) this.expoIndex=0;
        console.log(this.expoIndex);
      }, 5000);
      */
      return this.dataExposiciones.listaExpos[this.expoIndex];
    }
}