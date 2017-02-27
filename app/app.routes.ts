import { Routes } from '@angular/router';

import { appboards } from './app.boards';
import { dashboard} from './app.dashboard';

export const routes: Routes = [
  { path: '', component: appboards },
  {path:'dashboard/:id',component:dashboard}

];
