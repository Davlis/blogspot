import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { callApi } from '../utils';

@Injectable()
export class UserService {
  
  constructor(private dataService: DataService,) {
  }

  login(data): Promise<any> {
    return callApi(this.dataService, 'POST', 'auth/login', data)
  }

  register(data): Promise<any> {
    return callApi(this.dataService, 'POST', 'auth/register', data)
  }
}
