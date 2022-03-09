import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResultsPageRoutingModule } from './results-routing.module';

import { ResultsPage } from './results.page';
import { NumberToTextPipe } from 'src/app/pipes/number-to-text.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResultsPageRoutingModule,
  ],
  providers: [NumberToTextPipe],
  declarations: [ResultsPage, NumberToTextPipe]
})
export class ResultsPageModule {}
