import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgHttpLoaderModule } from 'ng-http-loader';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { Api } from './providers/service/api';
import { AuthGuardService } from './providers/auth-guard/auth-guard.service';
import { AppRoutes } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgHttpLoaderModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    NgbModule.forRoot()
  ],
  providers: [Api, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
