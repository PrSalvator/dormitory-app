import { afterRender, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  let result = true;
  afterRender(() => {
    if(!authService.isLoggedIn()){
      router.navigate(['/login']);
      result = false;
    }
  })
  return result;
};
