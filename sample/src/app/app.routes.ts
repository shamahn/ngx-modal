import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: '/simple-modal', pathMatch: 'full' },
  { path: 'simple-modal', loadChildren: './simple-modal/simple-modal.module#SimpleModalPageModule' },
  { path: 'custom-component', loadChildren: './custom-component/custom-component.module#CustomComponentPageModule' },
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);
