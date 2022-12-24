import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from '../shared/shared.module';
import { PlanesComponent } from './landing/components/planes/planes.component';


@NgModule({
  declarations: [
    LandingComponent,
    PlanesComponent
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
