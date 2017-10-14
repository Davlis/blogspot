import { Injectable }  from '@angular/core';
import { CanActivate, Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
              private route: ActivatedRoute,
              private authService: AuthService) {
  }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      if(this.authService.isAuthenticated()) {
        resolve(true);
      } else {
        this.router.navigate(['/login']);
        resolve(false);
      }
    });
   }

  }
