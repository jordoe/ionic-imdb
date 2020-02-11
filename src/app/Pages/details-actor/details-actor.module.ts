import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsActorPageRoutingModule } from './details-actor-routing.module';

import { DetailsActorPage } from './details-actor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsActorPageRoutingModule
  ],
  declarations: [DetailsActorPage]
})
export class DetailsActorPageModule {}
