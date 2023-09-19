import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

const TOKEN_KEY = 'auth-token';
const TOKEN_TYPE = 'token-type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  check: string | any = '';

  constructor(private router: Router) {}

  signOut(): void {
    sessionStorage.clear();
  }

  public setToken(token: string): void {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
    this.router.navigate(['bmi']);
  }

  public getToken(): string {
    const token = sessionStorage.getItem(TOKEN_KEY);
    if (token != null) {
      if (token.length > 1) {
        return token;
      }
    }
    return '';
  }

  public removeToken(): void {
    sessionStorage.removeItem(TOKEN_KEY);
  }

  public setType(type: string): void {
    sessionStorage.removeItem(TOKEN_TYPE);
    sessionStorage.setItem(TOKEN_TYPE, type);
  }

  public getType(): string | null {
    return sessionStorage.getItem(TOKEN_TYPE);
  }

  public removeType(): void {
    sessionStorage.removeItem(TOKEN_TYPE);
  }

  public isLoggedIn(): boolean {
    const token = sessionStorage.getItem(TOKEN_KEY);
    if ( token.length > 1 )
      return true; 

    return false;
  }
}
