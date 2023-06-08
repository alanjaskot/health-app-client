export class Login {
  static type = '[Auth] Login';
  constructor(public login: string, public password: string) {}
}

export class Logout {
  static type = '[Auth] Logout';
  constructor() {}
}

export class Register {
  static type = '[Auth] Register';
  constructor(public username: string, public password: string) {}
}
