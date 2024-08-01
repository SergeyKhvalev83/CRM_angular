import { ApplicationConfig } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
// import { routes } from './app.routes';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegistrationPageComponent } from './registration-page/registration-page.component';


export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },

  {
    path: 'registration',
    component: RegistrationPageComponent,
  },
];

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
