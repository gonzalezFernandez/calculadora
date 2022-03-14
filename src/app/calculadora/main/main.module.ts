import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { CalcularModule } from '../calcular/calcular.module';
import { MostrarModule } from '../mostrar/mostrar.modules';


@NgModule({
  declarations:[
    MainComponent
      ],
  exports:[
        MainComponent
      ],
  imports: [
        CommonModule,
        FormsModule,
        CalcularModule,
        MostrarModule
      ]
})
export class MainModule { }
