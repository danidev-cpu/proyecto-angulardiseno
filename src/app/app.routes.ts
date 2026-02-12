import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Menu } from './pages/menu/menu';
import { Admin } from './pages/admin/admin';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'menu', component: Menu },
  { path: 'admin', component: Admin },
  { path: 'login', component: Login },
];
