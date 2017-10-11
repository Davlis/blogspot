import { Injectable }  from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class LoginGuard implements CanActivate {

  constructor(private router: Router,
              private route: ActivatedRoute,) {
  }

  canActivate(): Promise<boolean> {
    return new Promise(resolve => {
      // TODO: inject localStorage and check if user is logged in.
      resolve(false);
    });
  }

}
