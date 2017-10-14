import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../+core/api/user.service';
import { LocalStorageService } from 'ngx-webstorage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup;

  constructor(public fb: FormBuilder,
              public userService: UserService,
              public localStorage: LocalStorageService,
              public router: Router,) {
  }

  ngOnInit() {
    this.formInit();
  }

  formInit() {
    this.formGroup = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  async submit() {

    if (this.formGroup.valid) {
      const { user, token } = await this.userService.login(this.formGroup.value);
      this.saveToLocalStorage(user, token);
      this.gotoMain();
    }

  }

  saveToLocalStorage(user, token) {
    this.localStorage.store('user', user);
    this.localStorage.store('token', token);
  }

  gotoMain() {
    this.router.navigate(['/main']);   
  }



}
