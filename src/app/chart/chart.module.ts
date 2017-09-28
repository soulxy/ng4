import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';
import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';
import { ChartLineComponent } from './chart-line/chart-line.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ChartRoutingModule
  ],
  declarations: [ChartComponent, ChartLineComponent]
})
export class ChartModule { }
