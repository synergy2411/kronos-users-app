import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  private token: string = null;

  register(email: string, password: string) {
    return new Promise((resolve, reject) => {
      if (email && password) {
        // Make Remote server call
        let user = { email, password };
        localStorage.setItem('user', JSON.stringify(user));
        resolve('USER_REGISTERED');
      }
      reject('NEED_VALID_CREDENTIALS');
    });
  }

  login(email: string, password: string) {
    return new Promise((resolve, reject) => {
      const user = JSON.parse(localStorage.getItem('user'));
      // Server call to verify the user
      if (user) {
        if (user.email === email && user.password === password) {
          this.token = Math.random().toString();
          resolve('AUTHENTICATED');
        } else {
          reject('NOT_FOUND');
        }
      }else{
        reject('NOT_REGISTERED');
      }
    });
  }

  getToken() {
    return this.token;
  }

  isAuthenticated() {
    return this.token !== null;
  }

  logout() {
    return new Promise((resolve, reject) => {
      localStorage.clear();
      resolve('LOGOUT_SUCCESSFULLY');
    });
  }
}
