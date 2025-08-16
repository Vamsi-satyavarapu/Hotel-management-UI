import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddRoomComponent } from './pages/add-room/add-room.component';
import { RoomsComponent } from './pages/rooms/rooms.component';
import { FeesComponent } from './pages/fees/fees.component';
import { FoodComponent } from './pages/food/food.component';
import { LoginComponent } from './pages/login/login.component';
import { UserTableComponent } from './pages/user-table/user-table.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-room', component: AddRoomComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'fees', component: FeesComponent },
  { path: 'food', component: FoodComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user-table', component: UserTableComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' } // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
