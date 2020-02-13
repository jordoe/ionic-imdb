import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { DetailsDirectorPageRoutingModule } from './details-director-routing.module';

import { DetailsDirectorPage } from './details-director.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsDirectorPageRoutingModule,
    TranslateModule
  ],
  declarations: [DetailsDirectorPage]
})
export class DetailsDirectorPageModule {}
