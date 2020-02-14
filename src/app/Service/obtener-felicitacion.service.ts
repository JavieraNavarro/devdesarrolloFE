import { Persona } from './../modelos/persona';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObtenerFelicitacionService {

  constructor(public http:HttpClient) { }
  url = "http://localhost:8082/personabff/felicitaciones"
  postPersona(persona:Persona): Observable<Persona>{
    
    return this.http.post<Persona>(this.url,persona);
  }


}
