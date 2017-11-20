import { RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MainComponent } from './views/main/main.component';

export const ROUTES = RouterModule.forRoot([
    {
        path: '',
        component: LoginComponent,
        children: [
            {
                path: 'signup',
                component: RegisterComponent
            },
            {
                path: '',
                component: LoginFormComponent
            }
        ]
    },
    {
        path: 'main',
        component: MainComponent,
    }
]);
