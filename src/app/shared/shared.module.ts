import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as COMPONENTS from './components';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [COMPONENTS.ListComponent],
  imports: [CommonModule, IonicModule],
  exports: [CommonModule, IonicModule, COMPONENTS.ListComponent]
})
export class SharedModule {}
