import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { LoginModule } from './views/login/login.module';
import { MainModule } from './views/main/main.module';
import { SharedModule } from './views/shared.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		LoginModule,
		BrowserModule,
		MainModule,
		SharedModule,
		ROUTES
	],
	providers: [],
	bootstrap: [
		AppComponent
	]
})
export class AppModule { }
