import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import {MatButtonModule} from '@angular/material/button'; 

import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [MenuComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class MenuModule { }
