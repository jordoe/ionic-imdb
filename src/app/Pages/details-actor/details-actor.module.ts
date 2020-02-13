import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { DetailsActorPageRoutingModule } from './details-actor-routing.module';

import { DetailsActorPage } from './details-actor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsActorPageRoutingModule,
    TranslateModule
  ],
  declarations: [DetailsActorPage]
})
export class DetailsActorPageModule {}
