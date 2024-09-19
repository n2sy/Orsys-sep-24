import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { ManageServersComponent } from './manage-servers/manage-servers.component';

const myRoutes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'cv', component: CvComponent },
  { path: 'accounts', component: HomeAccountComponent },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'servers', component: ManageServersComponent },
];

export let INETUM_ROUTING = RouterModule.forRoot(myRoutes);
// Commentaire pour mattthieu
