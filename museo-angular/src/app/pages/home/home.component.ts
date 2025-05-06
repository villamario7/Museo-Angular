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
            this.dataExposicion = data;
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
    dataExposicion! : dataExposicion;
}
