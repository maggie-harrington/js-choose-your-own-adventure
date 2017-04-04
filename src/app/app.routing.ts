import { TravelComponent } from './travel/travel.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LimaComponent } from './lima/lima.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path:'',
    component: WelcomeComponent
  },

  {
    path:'travel',
    component: TravelComponent
  },
  {
    path: 'lima',
    component: LimaComponent
  },
  // {
  //   path: 'admin',
  //   component: AdminComponent
  // }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
