import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { CardComponent } from './components/card/card.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { InicioComponent } from './pages/inicio/inicio.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import { CardInicioComponent } from '../producto/components/card-inicio/card-inicio.component';




@NgModule({
  declarations: [
    InicioComponent,
    CardComponent,
    CarruselComponent,
    CardInicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatGridListModule,
    MatIconModule
  ],
  exports:[
    InicioComponent,
    CardComponent,
    CarruselComponent,
    MatGridListModule,
    MatIconModule,
    CardInicioComponent
  ]
})
export class InicioModule { }
