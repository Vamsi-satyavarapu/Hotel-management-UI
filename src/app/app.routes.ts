import { Routes } from '@angular/router';
import { UserTableComponent } from './pages/user-table/user-table.component'; 
import { HomeComponent } from './pages/home/home.component';
import { RoomsComponent } from './pages/rooms/rooms.component';

import { FoodComponent } from './pages/food/food.component';
import { FeesComponent } from './pages/fees/fees.component';
import { LoginComponent } from './pages/login/login.component'; 
import { SignupComponent } from './pages/signup/signup.component';


export const routes: Routes = [
  { path: 'user-table', component: UserTableComponent },
  { path: 'home', component: HomeComponent },
  { path: 'rooms', component: RoomsComponent },

  { path: 'login', component: LoginComponent },
  { path: 'fees', component: FeesComponent },
  { path: 'food', component: FoodComponent },
  { path: 'signup', component: SignupComponent },
];
