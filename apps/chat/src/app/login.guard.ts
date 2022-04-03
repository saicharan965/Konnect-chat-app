import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Observable, of } from 'rxjs';
import { LoginTicketGenService } from './login-ticket-gen.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  phn: any
  constructor(private _ticketGenerator: LoginTicketGenService) { }
  canActivate(): Observable<boolean> {
    this._ticketGenerator.phoneNumber.subscribe(phn => {
      this.phn = phn
    })
    return of(this._ticketGenerator.IsAuthorized(this.phn))
    // return of(true)
  }

}
