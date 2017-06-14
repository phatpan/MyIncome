import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { PageListComponent } from './pages/page-list/page-list.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pages', component: PageListComponent }
];
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);