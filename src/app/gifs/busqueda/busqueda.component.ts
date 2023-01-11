import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent implements OnInit {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>; //le decimos de 
  //que tipo es con HTMLInputElement para que así nos muestre toda la yuda
  //disponible ya que elementRef por default tiene tipo generico

  //! es non-null assertion operator, propio de TypesCript
  //le decimos que no sera nulo en elemento (porque estamos 
  //seguros de eso)
  constructor(private gifsService: GifsService) { }

  ngOnInit(): void {
  }
  buscar(){
   let query= this.txtBuscar.nativeElement.value;
   if(query.trim().length===0) return;
   this.gifsService.buscarGifs(query)
   this.txtBuscar.nativeElement.value="";
  }
}
