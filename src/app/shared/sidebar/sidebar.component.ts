import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {

  constructor(private gifsService: GifsService) { }
  get historial(){
    return [...this.gifsService.historial];
  }
  ngOnInit(): void {
  }
  public buscar(query: string){
    this.gifsService.buscarGifs(query);
  }
}
