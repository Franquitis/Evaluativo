import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { CardComponent } from './components/card/card.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { InicioComponent } from './pages/inicio/inicio.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';




@NgModule({
  declarations: [
    InicioComponent,
    CardComponent,
    CarruselComponent
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
    MatIconModule
  ]
})
export class InicioModule { }
