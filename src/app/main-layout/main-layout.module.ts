import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout.component';
import { RouterModule, Routes } from '@angular/router';

const mainLayoutRoutes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(mainLayoutRoutes),
  ],
  declarations: [
    MainLayoutComponent,
  ]
})
export class MainLayoutModule { }
