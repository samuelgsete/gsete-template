import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutModule } from 'src/app/layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Page1Module } from './pages/page1/page1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
    Page1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
