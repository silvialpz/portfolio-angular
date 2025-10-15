import { Routes } from '@angular/router';
import { App } from './app';
import { Archive } from './archive/archive';
import { HomePage } from './home-page/home-page';

export const routes: Routes = [
  { path: '', component: HomePage }, // Main page
  { path: 'archive', component: Archive }, // Archive page
];

