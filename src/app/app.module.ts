import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';

import { AuthGuard } from './+core/guards/auth.guard';
import { LoginGuard } from './+core/guards/login.guard';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '', 
        redirectTo: 'main',
        pathMatch: 'full',
      },
      {
        path: 'main',
        pathMatch: 'full',
        canActivate: [AuthGuard],
        loadChildren: 'app/main-layout/main-layout.module#MainLayoutModule',
      },
      {
        path: 'login',
        pathMatch: 'full',
        canActivate: [LoginGuard],
        loadChildren: 'app/login/login.module#LoginModule',
      },
      {
        path: '**',
        redirectTo: 'main',
      }
    ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    AuthGuard,
    LoginGuard,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
