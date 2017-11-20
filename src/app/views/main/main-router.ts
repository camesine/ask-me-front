import { RouterModule } from '@angular/router';
import { MainComponent } from './main.component';

export const ROUTES = RouterModule.forRoot([
    {
        path: 'main',
        component: MainComponent
    }
]);
