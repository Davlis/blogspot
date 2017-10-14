import { Injectable }  from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {
  }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      if (this.authService.isAuthenticated()) {
        this.router.navigate(['/main']);
        resolve(false);       
      } else {
        resolve(true);
      }
    });
  }

}
