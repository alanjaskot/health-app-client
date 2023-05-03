import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const TOKEN_TYPE = 'token-type';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  check: string | any = '';

  constructor() {}

  signOut(): void {
    sessionStorage.clear();
  }

  public setToken(token: string): void {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.setItem(TOKEN_KEY, token);
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

  public setType(type: string): void {
    sessionStorage.removeItem(TOKEN_TYPE);
    sessionStorage.setItem(TOKEN_TYPE, type);
  }

  public getType(): string | null {
    return sessionStorage.getItem(TOKEN_TYPE);
  }

  public isLoggedIn(): boolean {
    this.check = this.getToken();
    if (this.check.length > 2) {
      return true;
    } else {
      return false;
    }
  }
}
