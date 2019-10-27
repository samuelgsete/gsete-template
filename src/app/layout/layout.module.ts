import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

import { SharedModule } from 'src/app/shared/shared.module';
import { Routers } from 'src/app/shared/Routers';

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ LayoutComponent ],
  providers: [ Routers ]
})
export class LayoutModule { }
