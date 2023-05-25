import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }
  public isauthantificated(): boolean {
    const token = localStorage.getItem('token')
    if (!token) {
      this.router.navigate(['/'])
      return false
    }
    else {
      return true
    }
  }
}
