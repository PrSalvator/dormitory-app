import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  readonly JWT_TOKEN = "JWT_TOKEN";

  //private isUserLogIn = new BehaviorSubject<boolean>(false);
  private http = inject(HttpClient);
  private router = inject(Router);

  constructor() { }

  login(user:{username: string, password: string}): Observable<any>{
    return this.http.post("https://dummyjson.com/auth/login", user).pipe(
      tap((response: any) => {
        this.doLogin(response.token)
      })
    )
  }

  getCurrentAuthUser(){
    return this.http.get("https://dummyjson.com/auth/me");
  }

  logout(){
    localStorage.removeItem(this.JWT_TOKEN);
    //this.isUserLogIn.next(false);
  }

  isLoggedIn():boolean {
    return !!localStorage.getItem(this.JWT_TOKEN);
  }

  private doLogin(token:string){
    //this.isUserLogIn.next(true);
    this.storeJwtToken(token);
  }

  private storeJwtToken(token: string){
    localStorage.setItem(this.JWT_TOKEN, token);
  }
}
