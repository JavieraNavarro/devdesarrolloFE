import { Persona } from './../../modelos/persona';
import { ObtenerFelicitacionService } from './../../Service/obtener-felicitacion.service';
import { Component, OnInit } from '@angular/core';
import { Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
mostrar = false;
  personas: any[] =  [];
  agregar:any[] = [];
  faltaNombre = false;
  faltaFecha= false;
  public nombreCompleto:string="";
  public fechaNacimiento:string="";
  public persona: Persona= {
    'nombreCompleto':this.nombreCompleto,
    'fechaNacimiento':this.fechaNacimiento

  }


  constructor(public service:ObtenerFelicitacionService) { }

  ngOnInit(): void {
  }

   
  validar(){
    let cadena = this.nombreCompleto;
    var intermedio = cadena.replace(/\s+/,' ');
    var sinSalto = intermedio.replace(/\s+/gi,' ');
    console.log("sin salto",sinSalto);
    let x = sinSalto.split(" ");
    console.log("length",x.length);
    if(x.length == 0 || x.length == 1 || x.length == 2 || x.length == 3 ){
      this.faltaNombre = true;
     return;
    } else {
      this.faltaNombre = false;
    }
     if( this.fechaNacimiento === ''){
      this.faltaFecha = true;
      return;
     } else {
      this.faltaFecha = false;
     } 
      this.postPersona(sinSalto);
     }
  postPersona(cadena:string){
    this.persona.nombreCompleto = cadena;
    this.persona.fechaNacimiento = this.fechaNacimiento;
    console.log(this.persona);
    this.service.postPersona(this.persona).subscribe((data: any)=>{
      console.log(data);
    this.agregar = data;
    this.mostrar = true;

    this.personas.push(this.agregar);
    this.fechaNacimiento= '';
    this.nombreCompleto='';
    });
  }

}
