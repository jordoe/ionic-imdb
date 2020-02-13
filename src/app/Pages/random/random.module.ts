import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { RandomPageRoutingModule } from './random-routing.module';

import { RandomPage } from './random.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomPageRoutingModule,
    TranslateModule
  ],
  declarations: [RandomPage]
})
export class RandomPageModule {}
