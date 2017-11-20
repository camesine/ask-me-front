import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';
import { SharedModule  } from '../shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    LoginFormComponent
  ]
})
export class LoginModule { }
