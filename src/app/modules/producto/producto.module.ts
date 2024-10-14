import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';

// VISTAS DEL MÓDULO PRODUCTO
import { EstanteriasComponent } from './pages/estanterias/estanterias.component';
import { ArmariosComponent } from './pages/armarios/armarios.component';
import { MesasComponent } from './pages/mesas/mesas.component';
import { SillonesComponent } from './pages/sillones/sillones.component';

// COMPONENTES LOCALES

import { CardArmariosComponent } from './components/card-armarios/card-armarios.component';
import { CardMesasComponent } from './components/card-mesas/card-mesas.component';
import { CardEstanteriasComponent } from './components/card-estanterias/card-estanterias.component';
import { CardSillonesComponent } from './components/card-sillones/card-sillones.component';

//COMPONENTES ANGULAR
import {MatGridListModule} from '@angular/material/grid-list';

@NgModule({
  declarations: [
    ArmariosComponent,
    MesasComponent,
    SillonesComponent,
    EstanteriasComponent,
    CardArmariosComponent,
    CardMesasComponent,
    CardEstanteriasComponent,
    CardSillonesComponent,
    
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatGridListModule
  ],
  exports: [
    ArmariosComponent,
    MesasComponent,
    SillonesComponent,
    EstanteriasComponent,
    MatGridListModule

  ]
})
export class ProductoModule { }
