import { RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';

export const ROUTES = RouterModule.forRoot([
    {
        path: '',
        component: LoginComponent
    }
]);
