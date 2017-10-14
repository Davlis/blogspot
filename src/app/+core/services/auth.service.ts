import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable()
export class AuthService {
  
  constructor(private localStorage: LocalStorageService) {
  }

  getToken() {
    return this.localStorage.retrieve('token');
  }

  getPayload() {
    return this.localStorage.retrieve('user');
  }

  getAuthHeader() {
    return `Bearer ${this.getToken()}`;
  }

  isAuthenticated(): boolean {
    return !!this.localStorage.retrieve('user');
  }
}
