import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { LoginComponent } from './login.component';
import { HeaderComponent } from '../../components/header/header.component';
import { RegisterComponent } from '../../components/register/register.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    LoginComponent,
    HeaderComponent,
    RegisterComponent,
    LoginFormComponent
  ]
})
export class LoginModule { }
