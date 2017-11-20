import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ROUTES } from './main-router';
import { SharedModule  } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ROUTES
  ],
  declarations: [
    MainComponent
  ]
})
export class MainModule { }
