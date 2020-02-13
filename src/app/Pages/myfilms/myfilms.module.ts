import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { IonicModule } from '@ionic/angular';

import { MyfilmsPageRoutingModule } from './myfilms-routing.module';

import { MyfilmsPage } from './myfilms.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyfilmsPageRoutingModule,
    TranslateModule
  ],
  declarations: [MyfilmsPage]
})
export class MyfilmsPageModule {}
