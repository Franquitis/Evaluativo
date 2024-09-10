import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';

// VISTAS DEL MÓDULO PRODUCTO
import { EstanteriasComponent } from './pages/estanterias/estanterias.component';
import { ArmariosComponent } from './pages/armarios/armarios.component';
import { MesasComponent } from './pages/mesas/mesas.component';
import { SillonesComponent } from './pages/sillones/sillones.component';

// COMPONENTES LOCALES
import { CardComponent } from './components/card/card.component';
import { CardAlimentacionComponent } from './components/card-alimentacion/card-alimentacion.component';


@NgModule({
  declarations: [
    ArmariosComponent,
    MesasComponent,
    SillonesComponent,
    EstanteriasComponent,
    CardComponent,
    CardAlimentacionComponent,
    EstanteriasComponent,
    ArmariosComponent,
    MesasComponent,
    SillonesComponent
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule
  ],
  exports: [
    ArmariosComponent,
    MesasComponent,
    SillonesComponent,
    EstanteriasComponent,
    CardComponent,
    CardAlimentacionComponent
  ]
})
export class ProductoModule { }
