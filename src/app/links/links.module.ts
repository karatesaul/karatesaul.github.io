import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { LinksRoutingModule } from './links-routing.module';
import { LinksComponent } from './links.component';

@NgModule({
  declarations: [
    LinksComponent
  ],
  imports: [
    CommonModule,
    LinksRoutingModule,
    MatDividerModule
  ]
})
export class LinksModule { }
