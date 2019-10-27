import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from 'src/app/app-routing.module';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatRippleModule} from '@angular/material/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatRippleModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatButtonToggleModule
  ],
  exports: [
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatRippleModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatButtonToggleModule
  ]
})
export class SharedModule { }
