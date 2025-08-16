import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';                // ✅ Required for ngModel
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RoomsComponent } from './pages/rooms/rooms.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { FeesComponent } from './pages/fees/fees.component';
import { FoodComponent } from './pages/food/food.component';
import { LoginComponent } from './pages/login/login.component';
import { UserTableComponent } from './pages/user-table/user-table.component';

@NgModule({
  declarations: [
    AppComponent,
    RoomsComponent,
    NavbarComponent,
    HomeComponent,
    FeesComponent,
    FoodComponent,
    LoginComponent,
    UserTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule      // ✅ REQUIRED for [(ngModel)] and ngForm
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
