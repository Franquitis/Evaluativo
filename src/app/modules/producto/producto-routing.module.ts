import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// TODAS LAS VISTAS DEL MÓDULO PRODUCTO
import { SillonesComponent } from './pages/sillones/sillones.component';
import { MesasComponent } from './pages/mesas/mesas.component';
import { ArmariosComponent } from './pages/armarios/armarios.component';
import { EstanteriasComponent} from './pages/estanterias/estanterias.component';

const routes: Routes = [
  {
    path:"sillones",component:SillonesComponent
  },
  {
    path:"mesas",component:MesasComponent
  },
  {
    path:"armarios",component:ArmariosComponent
  },
  {
    path:"estanterias",component:EstanteriasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
