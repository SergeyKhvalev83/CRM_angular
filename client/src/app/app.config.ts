import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
// import { routes } from './app.routes';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';
import { AuthLayoutComponent } from './shared/layouts/auth-layout/auth-layout.component';
import { SiteLayoutComponent } from './shared/layouts/site-layout/site-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: '', redirectTo: "/login", pathMatch: "full" },
      { path: 'login', component: LoginPageComponent },
      { path: 'register', component: RegistrationPageComponent },
    ],
  },

  {
    path: '',
    component: SiteLayoutComponent, children:[]
  },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)],
};
