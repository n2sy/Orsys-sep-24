import { RouterModule, Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { AccueilComponent } from './accueil/accueil.component';
import { HomeAccountComponent } from './accounts/home-account/home-account.component';
import { MsWordComponent } from './ms-word/ms-word.component';
import { InfosComponent } from './infos/infos.component';
import { AddComponent } from './add/add.component';
import { UpdateComponent } from './update/update.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

const myRoutes: Routes = [
  //Avec children V2
  // { path: '', component: AccueilComponent },
  // {
  //   path: 'cv',
  //   component: CvComponent,
  //   children: [
  //     { path: 'add', component: AddComponent },
  //     {
  //       path: ':id',
  //       children: [
  //         { path: '', component: InfosComponent },
  //         { path: 'edit', component: UpdateComponent },
  //       ],
  //     },
  //   ],
  // },
  // { path: 'accounts', component: HomeAccountComponent },
  // { path: 'ms-word', component: MsWordComponent },
  // { path: 'servers', component: ManageServersComponent },
  // { path: 'not-found', component: NotFoundComponent }, // wild route
  // { path: '**', redirectTo: 'not-found' }, // wild route

  //Avec children V1
  { path: '', component: AccueilComponent },
  {
    path: 'cv',
    children: [
      { path: '', component: CvComponent },
      { path: 'add', component: AddComponent },
      {
        path: ':id',
        children: [
          { path: '', component: InfosComponent },
          { path: 'edit', component: UpdateComponent },
        ],
      },
    ],
  },
  { path: 'accounts', component: HomeAccountComponent },
  { path: 'ms-word', component: MsWordComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'servers',
    loadChildren: () => import('./sub/sub.module').then((m) => m.SubModule),
  },
  { path: 'not-found', component: NotFoundComponent }, // wild route
  { path: '**', redirectTo: 'not-found' }, // wild route

  //Sans children
  // { path: '', component: AccueilComponent },
  // { path: 'cv', component: CvComponent },
  // { path: 'cv/add', component: AddComponent },
  // { path: 'cv/:id', component: InfosComponent },
  // { path: 'cv/:id/edit', component: UpdateComponent },
  // { path: 'accounts', component: HomeAccountComponent },
  // { path: 'ms-word', component: MsWordComponent },
  // { path: 'servers', component: ManageServersComponent },
  // { path: 'not-found', component: NotFoundComponent }, // wild route
  // { path: '**', redirectTo: 'not-found' }, // wild route
];

export let INETUM_ROUTING = RouterModule.forRoot(myRoutes);
