import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { MenuModule } from '../menu/menu.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderModule } from '../header/header.module';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  exports: [LayoutComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MenuModule,
    BrowserAnimationsModule,
    HeaderModule
  ]
})
export class LayoutModule { }
