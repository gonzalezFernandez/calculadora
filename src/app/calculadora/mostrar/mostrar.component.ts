import { Component, Input } from '@angular/core';
import { CalculadoraService } from '../services/calculadora.service';


@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html'

})
export class MostrarComponent {


  @Input() resultado:number= 0;

  constructor(public servicio:CalculadoraService){}

  public limpiaResultado():void{
    this.resultado = 0;
    console.log("ada");

  }

}
