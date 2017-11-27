import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ROUTES } from './main-router';
import { SharedModule  } from '../shared.module';
import { SimpleTinyComponent } from '../../components/tinymce/tinymce.component';
import { ConceptoComponent } from '../../components/concepto/concepto.component';
import { DefinicionComponent } from '../../components/definicion/definicion.component';
import { CaracteristicaComponent } from '../../components/caracteristica/caracteristica.component';
import { RelacionComponent } from '../../components/relacion/relacion.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		ROUTES
	],
	declarations: [
		MainComponent,
		SimpleTinyComponent,
		ConceptoComponent,
		DefinicionComponent,
		CaracteristicaComponent,
		RelacionComponent
	]
})
export class MainModule { }
