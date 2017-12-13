import { RouterModule } from '@angular/router';
import { LoginComponent } from '../../views/login/login.component';
import { RegisterComponent } from '../../components/register/register.component';
import { LoginFormComponent } from '../../components/login-form/login-form.component';

export const ROUTES = RouterModule.forRoot([
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: 'signup', component: RegisterComponent },
      { path: '', component: LoginFormComponent }
    ]
  }
]);
