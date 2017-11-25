import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ROUTES } from './main-router';
import { SharedModule  } from '../shared.module';
import { SimpleTinyComponent } from '../../components/tinymce/tinymce.component';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ROUTES
  ],
  declarations: [
    MainComponent,
    SimpleTinyComponent
  ]
})
export class MainModule { }
