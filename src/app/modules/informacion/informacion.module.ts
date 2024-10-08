import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatGridListModule} from '@angular/material/grid-list';

import { InformacionRoutingModule } from './informacion-routing.module';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { QuienesComponent } from './pages/quienes/quienes.component';


@NgModule({
  declarations: [
    ContactoComponent,
    QuienesComponent
  ],
  imports: [
    CommonModule,
    InformacionRoutingModule,
    MatGridListModule
  ],
  exports:[
    MatGridListModule
  ]
})
export class InformacionModule { }
