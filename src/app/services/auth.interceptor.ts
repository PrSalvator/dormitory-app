import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = getToken();
  if(token){
    var cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      },
    });

    return next(cloned);
  }
  
  return next(req);
};

function getToken(){
  return localStorage.getItem(inject(AuthService).JWT_TOKEN);
}