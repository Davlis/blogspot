import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const registerRoutes: Routes = [
  {
    path: '',
    component: RegisterComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(registerRoutes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    RegisterComponent,
  ]
})
export class RegisterModule { }
