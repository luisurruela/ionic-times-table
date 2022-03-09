import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MultiplicationsPageRoutingModule } from './multiplications-routing.module';

import { MultiplicationsPage } from './multiplications.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MultiplicationsPageRoutingModule
  ],
  declarations: [MultiplicationsPage]
})
export class MultiplicationsPageModule {}
