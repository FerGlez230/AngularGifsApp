import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SearchGiftResponse, Gif } from '../interface/gifts.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {
  private _historial: string [] = [];
  private apiKey: string= "rM0uawkBkW2cXJu101zWM0T2mF5X6oyR"
  public resultados: Gif[]= [];
  private servicioUrl= "https://api.giphy.com/v1/gifs";
  get historial(){
    return this._historial;
  }
  constructor(private http: HttpClient) {
    
    this._historial= JSON.parse(localStorage.getItem("historial")!)|| [];
    this.resultados=JSON.parse(localStorage.getItem("res")!)||[];
   }

  buscarGifs( query: string){
    query= query.trim().toLowerCase();
    if(!this._historial.includes(query)){
      this._historial.unshift(query);
      this._historial=this._historial.splice(0,10);
      localStorage.setItem("historial", JSON.stringify(this._historial));
      console.log(this._historial);
      
    }
    const params = new HttpParams()
    .set("api_key", this.apiKey)
    .set("limit", "10")
    .set("q", query)
    this.http.get<SearchGiftResponse>(`${this.servicioUrl}/search`,{params})
      .subscribe((resp)=>{
        
        this.resultados=resp.data;
        localStorage.setItem("res", JSON.stringify(this.resultados));
      })
    
  }
}
