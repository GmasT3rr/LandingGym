import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { PlanesComponent } from './landing/components/planes/planes.component';
import { NosotrosComponent } from './landing/components/nosotros/nosotros.component';
import { InicioComponent } from './landing/components/inicio/inicio.component';
import { CambiosFisicosComponent } from './landing/components/cambios-fisicos/cambios-fisicos.component';
import { FormularioComponent } from './landing/components/formulario/formulario.component';


@NgModule({
  declarations: [
    LandingComponent,
    PlanesComponent,
    NosotrosComponent,
    InicioComponent,
    CambiosFisicosComponent,
    FormularioComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule
  ],
  exports:[
    LandingComponent
  ]
})
export class FeaturesModule { }
