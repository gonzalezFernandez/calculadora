import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostrarComponent } from './mostrar.component';

@NgModule({
  declarations:[
MostrarComponent
  ],
  exports:[
MostrarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MostrarModule { }
